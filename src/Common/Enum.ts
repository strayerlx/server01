export enum InputTypeEnum {
    ActorMove,
    WeaponShoot,
    TimePast
}

export enum EntityTypeEnum {
    Actor1 = "Actor1",
    Map = "Map",
    Weapon1 = "Weapon1",
    Bullet1 = "Bullet1",
    Bullet2 = "Bullet2",
    Explosion = "Explosion",
}


export enum ApiMsgEnum {
    MsgClientSync,
    MsgServerSync,
    MsgPlayerList,
    MsgRoomList,
    MsgGameStart,

    MsgRoom,

    ApiPlayerJoin,
    ApiPlayerList,
    ApiRoomCreate,
    ApiRoomJoin,
    ApiRoomLeave,
    ApiRoomList,
    ApiGameStart,

    // --------------------
    ApiGlobalLogin,
}

// ================================================

export enum LevelEnum {
    Level1,
    Level2,
    Level3,
    Level4,
    Level5,
}