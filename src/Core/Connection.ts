import { EventEmitter } from "stream";
import { MyServer } from "./MyServer";
import { WebSocket } from "ws";
import { ApiMsgEnum, IModel, binaryDecode, binaryEncode, buffer2ArrayBuffer } from "../Common";

interface IItem {
    cb: Function;
    ctx: unknown;
}

export class Connection extends EventEmitter {
    private msgMap: Map<ApiMsgEnum, Array<IItem>> = new Map();

    constructor(private server: MyServer, private ws: WebSocket) {
        super()

        this.ws.on("close", () => {
            this.emit("close")
        })

        this.ws.on("message", (buffer: Buffer) => {
            try {
                const json = binaryDecode(buffer2ArrayBuffer(buffer))
                const { name, data } = json

                if (this.server.apiMap.has(name)) {

                    try {
                        const cb = this.server.apiMap.get(name)
                        const res = cb?.call(null, this, data)
                        this.sendMsg(name, {
                            success: true,
                            res
                        })
                    } catch (error) {
                        this.sendMsg(name, {
                            success: false,
                            error: error
                        })
                    }
                } else {

                    try {
                        if (this.msgMap.has(name)) {
                            this.msgMap.get(name)?.forEach(({ cb, ctx }) => {
                                cb.call(ctx, this, data);
                            });
                        }
                    } catch (error) {
                        console.log(error)
                    }

                }


            } catch (error) {
                console.log(error)
            }
        })
    }

    sendMsg<T extends keyof IModel["msg"]>(name: T, data: IModel["msg"][T]) {
        const msg = {
            name, data
        }
        const ta = binaryEncode(name, data)
        const buffer = Buffer.from(ta.buffer)
        this.ws.send(buffer)
    }

    linstenMsg<T extends keyof IModel["msg"]>(name: T, cb: (connection: Connection, args: IModel["msg"][T]) => void, ctx: unknown) {
        if (this.msgMap.has(name)) {
            this.msgMap.get(name)?.push({ cb, ctx });
        } else {
            this.msgMap.set(name, [{ cb, ctx }]);
        }
    }

    unlinstenMsg<T extends keyof IModel["msg"]>(name: T, cb: (connection: Connection, args: IModel["msg"][T]) => void, ctx: unknown) {
        if (this.msgMap.has(name)) {
            const index: any = this.msgMap.get(name)?.findIndex((i) => cb === i.cb && i.ctx === ctx);
            index > -1 && this.msgMap.get(name)?.splice(index, 1)
        }
    }
}