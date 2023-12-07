import { EntityTypeEnum, InputTypeEnum, LevelEnum } from "./Enum"

export interface IVec2 {
    x: number,
    y: number
}

export interface IActor {
    id: number,
    position: IVec2
    direction: IVec2,
    type: EntityTypeEnum,
    bulletType: EntityTypeEnum,
    weaponType: EntityTypeEnum,
    hp: number
}

export interface IBullet {
    id: number,
    owner: number
    position: IVec2
    direction: IVec2,
    type: EntityTypeEnum,
}

export interface IState {
    actors: IActor[],
    bullets: IBullet[],
    nextBulletId: number,
    seed?: number,
}

export type IClientInput = IActorMove | IWeaponShoot | ITimePast

export interface IActorMove {
    id: number,
    type: InputTypeEnum.ActorMove,
    direction: IVec2,
    dt: number
}

export interface IWeaponShoot {
    type: InputTypeEnum.WeaponShoot,
    owner: number,
    position: IVec2,
    direction: IVec2,
}

export interface ITimePast {
    type: InputTypeEnum.TimePast,
    dt: number
}


// ============================================================

export interface IBackPack {
    equip: string
}

export interface IActorInfo {
    nickName: string,
    gameId: number,
    attributes:number,
    level: LevelEnum,
    experience: number,
    backpack: IBackPack,
}