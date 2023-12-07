import { ApiMsgEnum } from "./Enum"
import {
    IApiGameStartReq,
    IApiGameStartRes,
    IApiGlobalLoginReq,
    IApiGlobalLoginRes,
    IApiPlayerJoinReq,
    IApiPlayerJoinRes,
    IApiPlayerListReq,
    IApiPlayerListRes,
    IApiRoomCreateReq,
    IApiRoomCreateRes,
    IApiRoomJoinReq,
    IApiRoomJoinRes,
    IApiRoomLeaveReq,
    IApiRoomLeaveRes,
    IApiRoomListReq,
    IApiRoomListRes
} from "./Api"
import { IMsgClientSync, IMsgGameStart, IMsgPlayerList, IMsgRoom, IMsgRoomList, IMsgServerSync } from "./Msg"
import { IActorInfo, IState } from "./State"

export interface IModel {
    api: {
        [ApiMsgEnum.ApiPlayerJoin]: {
            req: IApiPlayerJoinReq
            res: IApiPlayerJoinRes
        }
        [ApiMsgEnum.ApiPlayerList]: {
            req: IApiPlayerListReq
            res: IApiPlayerListRes
        }
        [ApiMsgEnum.ApiRoomCreate]: {
            req: IApiRoomCreateReq
            res: IApiRoomCreateRes
        }
        [ApiMsgEnum.ApiRoomList]: {
            req: IApiRoomListReq
            res: IApiRoomListRes
        }
        [ApiMsgEnum.ApiRoomJoin]: {
            req: IApiRoomJoinReq
            res: IApiRoomJoinRes
        }
        [ApiMsgEnum.ApiRoomLeave]: {
            req: IApiRoomLeaveReq
            res: IApiRoomLeaveRes
        }
        [ApiMsgEnum.ApiGameStart]: {
            req: IApiGameStartReq
            res: IApiGameStartRes
        }
        [ApiMsgEnum.ApiGlobalLogin]: {
            req: IApiGlobalLoginReq
            res: IApiGlobalLoginRes
        }
    }
    msg: {
        [ApiMsgEnum.MsgClientSync]: IMsgClientSync
        [ApiMsgEnum.MsgServerSync]: IMsgServerSync

        [ApiMsgEnum.MsgGameStart]: IMsgGameStart

        [ApiMsgEnum.MsgPlayerList]: IMsgPlayerList
        [ApiMsgEnum.MsgRoomList]: IMsgRoomList
        [ApiMsgEnum.MsgRoom]: IMsgRoom
    }
}