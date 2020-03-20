import * as $protobuf from "protobufjs";
/** Namespace session. */
export namespace session {

    /** Properties of a Session. */
    interface ISession {

        /** Session token */
        token?: (string|null);

        /** Session user */
        user?: (common.IUser|null);
    }

    /** Represents a Session. */
    class Session implements ISession {

        /**
         * Constructs a new Session.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ISession);

        /** Session token. */
        public token: string;

        /** Session user. */
        public user?: (common.IUser|null);

        /**
         * Creates a new Session instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Session instance
         */
        public static create(properties?: session.ISession): session.Session;

        /**
         * Encodes the specified Session message. Does not implicitly {@link session.Session.verify|verify} messages.
         * @param message Session message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ISession, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Session message, length delimited. Does not implicitly {@link session.Session.verify|verify} messages.
         * @param message Session message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ISession, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Session message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.Session;

        /**
         * Decodes a Session message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.Session;

        /**
         * Verifies a Session message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Session message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Session
         */
        public static fromObject(object: { [k: string]: any }): session.Session;

        /**
         * Creates a plain object from a Session message. Also converts values to other types if specified.
         * @param message Session
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.Session, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Session to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRequest. */
    interface ILoginRequest {

        /** LoginRequest username */
        username?: (string|null);

        /** LoginRequest password */
        password?: (string|null);
    }

    /** Represents a LoginRequest. */
    class LoginRequest implements ILoginRequest {

        /**
         * Constructs a new LoginRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ILoginRequest);

        /** LoginRequest username. */
        public username: string;

        /** LoginRequest password. */
        public password: string;

        /**
         * Creates a new LoginRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRequest instance
         */
        public static create(properties?: session.ILoginRequest): session.LoginRequest;

        /**
         * Encodes the specified LoginRequest message. Does not implicitly {@link session.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRequest message, length delimited. Does not implicitly {@link session.LoginRequest.verify|verify} messages.
         * @param message LoginRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ILoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.LoginRequest;

        /**
         * Decodes a LoginRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.LoginRequest;

        /**
         * Verifies a LoginRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRequest
         */
        public static fromObject(object: { [k: string]: any }): session.LoginRequest;

        /**
         * Creates a plain object from a LoginRequest message. Also converts values to other types if specified.
         * @param message LoginRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.LoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginResponse. */
    interface ILoginResponse {

        /** LoginResponse error */
        error?: (common.Error|null);

        /** LoginResponse session */
        session?: (session.ISession|null);
    }

    /** Represents a LoginResponse. */
    class LoginResponse implements ILoginResponse {

        /**
         * Constructs a new LoginResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ILoginResponse);

        /** LoginResponse error. */
        public error: common.Error;

        /** LoginResponse session. */
        public session?: (session.ISession|null);

        /**
         * Creates a new LoginResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginResponse instance
         */
        public static create(properties?: session.ILoginResponse): session.LoginResponse;

        /**
         * Encodes the specified LoginResponse message. Does not implicitly {@link session.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginResponse message, length delimited. Does not implicitly {@link session.LoginResponse.verify|verify} messages.
         * @param message LoginResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ILoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.LoginResponse;

        /**
         * Decodes a LoginResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.LoginResponse;

        /**
         * Verifies a LoginResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginResponse
         */
        public static fromObject(object: { [k: string]: any }): session.LoginResponse;

        /**
         * Creates a plain object from a LoginResponse message. Also converts values to other types if specified.
         * @param message LoginResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.LoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LogoutRequest. */
    interface ILogoutRequest {
    }

    /** Represents a LogoutRequest. */
    class LogoutRequest implements ILogoutRequest {

        /**
         * Constructs a new LogoutRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ILogoutRequest);

        /**
         * Creates a new LogoutRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogoutRequest instance
         */
        public static create(properties?: session.ILogoutRequest): session.LogoutRequest;

        /**
         * Encodes the specified LogoutRequest message. Does not implicitly {@link session.LogoutRequest.verify|verify} messages.
         * @param message LogoutRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ILogoutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogoutRequest message, length delimited. Does not implicitly {@link session.LogoutRequest.verify|verify} messages.
         * @param message LogoutRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ILogoutRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogoutRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogoutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.LogoutRequest;

        /**
         * Decodes a LogoutRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogoutRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.LogoutRequest;

        /**
         * Verifies a LogoutRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogoutRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogoutRequest
         */
        public static fromObject(object: { [k: string]: any }): session.LogoutRequest;

        /**
         * Creates a plain object from a LogoutRequest message. Also converts values to other types if specified.
         * @param message LogoutRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.LogoutRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogoutRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LogoutResponse. */
    interface ILogoutResponse {

        /** LogoutResponse error */
        error?: (common.Error|null);
    }

    /** Represents a LogoutResponse. */
    class LogoutResponse implements ILogoutResponse {

        /**
         * Constructs a new LogoutResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: session.ILogoutResponse);

        /** LogoutResponse error. */
        public error: common.Error;

        /**
         * Creates a new LogoutResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogoutResponse instance
         */
        public static create(properties?: session.ILogoutResponse): session.LogoutResponse;

        /**
         * Encodes the specified LogoutResponse message. Does not implicitly {@link session.LogoutResponse.verify|verify} messages.
         * @param message LogoutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: session.ILogoutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogoutResponse message, length delimited. Does not implicitly {@link session.LogoutResponse.verify|verify} messages.
         * @param message LogoutResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: session.ILogoutResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): session.LogoutResponse;

        /**
         * Decodes a LogoutResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogoutResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): session.LogoutResponse;

        /**
         * Verifies a LogoutResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogoutResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogoutResponse
         */
        public static fromObject(object: { [k: string]: any }): session.LogoutResponse;

        /**
         * Creates a plain object from a LogoutResponse message. Also converts values to other types if specified.
         * @param message LogoutResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: session.LogoutResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogoutResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Error enum. */
    enum Error {
        NO_ERROR = 0,
        UNKNOWN_ERROR = 1,
        INTERNAL_ERROR = 2,
        INVALID_USERNAME_OR_PASSWORD = 3
    }

    /** UserRole enum. */
    enum UserRole {
        UNKNOWN_USER_ROLE = 0,
        ROLE_ADMIN = 1,
        ROLE_USER = 2
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (number|Long|null);

        /** User role */
        role?: (common.UserRole|null);

        /** User nickname */
        nickname?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IUser);

        /** User id. */
        public id: (number|Long);

        /** User role. */
        public role: common.UserRole;

        /** User nickname. */
        public nickname: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: common.IUser): common.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link common.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link common.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): common.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StockDaily. */
    interface IStockDaily {

        /** StockDaily ts_code */
        ts_code?: (string|null);

        /** StockDaily trade_date */
        trade_date?: (string|null);

        /** StockDaily open */
        open?: (number|null);

        /** StockDaily high */
        high?: (number|null);

        /** StockDaily low */
        low?: (number|null);

        /** StockDaily close */
        close?: (number|null);

        /** StockDaily pre_close */
        pre_close?: (number|null);

        /** StockDaily change */
        change?: (number|null);

        /** StockDaily pct_chg */
        pct_chg?: (number|null);

        /** StockDaily vol */
        vol?: (number|null);

        /** StockDaily amount */
        amount?: (number|null);
    }

    /** Represents a StockDaily. */
    class StockDaily implements IStockDaily {

        /**
         * Constructs a new StockDaily.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IStockDaily);

        /** StockDaily ts_code. */
        public ts_code: string;

        /** StockDaily trade_date. */
        public trade_date: string;

        /** StockDaily open. */
        public open: number;

        /** StockDaily high. */
        public high: number;

        /** StockDaily low. */
        public low: number;

        /** StockDaily close. */
        public close: number;

        /** StockDaily pre_close. */
        public pre_close: number;

        /** StockDaily change. */
        public change: number;

        /** StockDaily pct_chg. */
        public pct_chg: number;

        /** StockDaily vol. */
        public vol: number;

        /** StockDaily amount. */
        public amount: number;

        /**
         * Creates a new StockDaily instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StockDaily instance
         */
        public static create(properties?: common.IStockDaily): common.StockDaily;

        /**
         * Encodes the specified StockDaily message. Does not implicitly {@link common.StockDaily.verify|verify} messages.
         * @param message StockDaily message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IStockDaily, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StockDaily message, length delimited. Does not implicitly {@link common.StockDaily.verify|verify} messages.
         * @param message StockDaily message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IStockDaily, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StockDaily message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StockDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.StockDaily;

        /**
         * Decodes a StockDaily message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StockDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.StockDaily;

        /**
         * Verifies a StockDaily message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StockDaily message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StockDaily
         */
        public static fromObject(object: { [k: string]: any }): common.StockDaily;

        /**
         * Creates a plain object from a StockDaily message. Also converts values to other types if specified.
         * @param message StockDaily
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.StockDaily, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StockDaily to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
