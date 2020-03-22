import * as $protobuf from "protobufjs";
/** Namespace account. */
export namespace account {

    /** Properties of a FetchAccountRequest. */
    interface IFetchAccountRequest {
    }

    /** Represents a FetchAccountRequest. */
    class FetchAccountRequest implements IFetchAccountRequest {

        /**
         * Constructs a new FetchAccountRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IFetchAccountRequest);

        /**
         * Creates a new FetchAccountRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchAccountRequest instance
         */
        public static create(properties?: account.IFetchAccountRequest): account.FetchAccountRequest;

        /**
         * Encodes the specified FetchAccountRequest message. Does not implicitly {@link account.FetchAccountRequest.verify|verify} messages.
         * @param message FetchAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IFetchAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchAccountRequest message, length delimited. Does not implicitly {@link account.FetchAccountRequest.verify|verify} messages.
         * @param message FetchAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IFetchAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchAccountRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.FetchAccountRequest;

        /**
         * Decodes a FetchAccountRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FetchAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.FetchAccountRequest;

        /**
         * Verifies a FetchAccountRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchAccountRequest
         */
        public static fromObject(object: { [k: string]: any }): account.FetchAccountRequest;

        /**
         * Creates a plain object from a FetchAccountRequest message. Also converts values to other types if specified.
         * @param message FetchAccountRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.FetchAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchAccountRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FetchAccountResponse. */
    interface IFetchAccountResponse {

        /** FetchAccountResponse error */
        error?: (common.Error|null);

        /** FetchAccountResponse accounts */
        accounts?: (common.IUser[]|null);
    }

    /** Represents a FetchAccountResponse. */
    class FetchAccountResponse implements IFetchAccountResponse {

        /**
         * Constructs a new FetchAccountResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IFetchAccountResponse);

        /** FetchAccountResponse error. */
        public error: common.Error;

        /** FetchAccountResponse accounts. */
        public accounts: common.IUser[];

        /**
         * Creates a new FetchAccountResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchAccountResponse instance
         */
        public static create(properties?: account.IFetchAccountResponse): account.FetchAccountResponse;

        /**
         * Encodes the specified FetchAccountResponse message. Does not implicitly {@link account.FetchAccountResponse.verify|verify} messages.
         * @param message FetchAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IFetchAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchAccountResponse message, length delimited. Does not implicitly {@link account.FetchAccountResponse.verify|verify} messages.
         * @param message FetchAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IFetchAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchAccountResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.FetchAccountResponse;

        /**
         * Decodes a FetchAccountResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FetchAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.FetchAccountResponse;

        /**
         * Verifies a FetchAccountResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchAccountResponse
         */
        public static fromObject(object: { [k: string]: any }): account.FetchAccountResponse;

        /**
         * Creates a plain object from a FetchAccountResponse message. Also converts values to other types if specified.
         * @param message FetchAccountResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.FetchAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchAccountResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateAccountRequest. */
    interface ICreateAccountRequest {

        /** CreateAccountRequest username */
        username?: (string|null);

        /** CreateAccountRequest password */
        password?: (string|null);
    }

    /** Represents a CreateAccountRequest. */
    class CreateAccountRequest implements ICreateAccountRequest {

        /**
         * Constructs a new CreateAccountRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.ICreateAccountRequest);

        /** CreateAccountRequest username. */
        public username: string;

        /** CreateAccountRequest password. */
        public password: string;

        /**
         * Creates a new CreateAccountRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateAccountRequest instance
         */
        public static create(properties?: account.ICreateAccountRequest): account.CreateAccountRequest;

        /**
         * Encodes the specified CreateAccountRequest message. Does not implicitly {@link account.CreateAccountRequest.verify|verify} messages.
         * @param message CreateAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.ICreateAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateAccountRequest message, length delimited. Does not implicitly {@link account.CreateAccountRequest.verify|verify} messages.
         * @param message CreateAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.ICreateAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateAccountRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.CreateAccountRequest;

        /**
         * Decodes a CreateAccountRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.CreateAccountRequest;

        /**
         * Verifies a CreateAccountRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateAccountRequest
         */
        public static fromObject(object: { [k: string]: any }): account.CreateAccountRequest;

        /**
         * Creates a plain object from a CreateAccountRequest message. Also converts values to other types if specified.
         * @param message CreateAccountRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.CreateAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateAccountRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateAccountResponse. */
    interface ICreateAccountResponse {

        /** CreateAccountResponse error */
        error?: (common.Error|null);
    }

    /** Represents a CreateAccountResponse. */
    class CreateAccountResponse implements ICreateAccountResponse {

        /**
         * Constructs a new CreateAccountResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.ICreateAccountResponse);

        /** CreateAccountResponse error. */
        public error: common.Error;

        /**
         * Creates a new CreateAccountResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateAccountResponse instance
         */
        public static create(properties?: account.ICreateAccountResponse): account.CreateAccountResponse;

        /**
         * Encodes the specified CreateAccountResponse message. Does not implicitly {@link account.CreateAccountResponse.verify|verify} messages.
         * @param message CreateAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.ICreateAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateAccountResponse message, length delimited. Does not implicitly {@link account.CreateAccountResponse.verify|verify} messages.
         * @param message CreateAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.ICreateAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateAccountResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.CreateAccountResponse;

        /**
         * Decodes a CreateAccountResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.CreateAccountResponse;

        /**
         * Verifies a CreateAccountResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateAccountResponse
         */
        public static fromObject(object: { [k: string]: any }): account.CreateAccountResponse;

        /**
         * Creates a plain object from a CreateAccountResponse message. Also converts values to other types if specified.
         * @param message CreateAccountResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.CreateAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateAccountResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateAccountRequest. */
    interface IUpdateAccountRequest {

        /** UpdateAccountRequest id */
        id?: (number|Long|null);

        /** UpdateAccountRequest username */
        username?: (string|null);
    }

    /** Represents an UpdateAccountRequest. */
    class UpdateAccountRequest implements IUpdateAccountRequest {

        /**
         * Constructs a new UpdateAccountRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IUpdateAccountRequest);

        /** UpdateAccountRequest id. */
        public id: (number|Long);

        /** UpdateAccountRequest username. */
        public username: string;

        /**
         * Creates a new UpdateAccountRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateAccountRequest instance
         */
        public static create(properties?: account.IUpdateAccountRequest): account.UpdateAccountRequest;

        /**
         * Encodes the specified UpdateAccountRequest message. Does not implicitly {@link account.UpdateAccountRequest.verify|verify} messages.
         * @param message UpdateAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IUpdateAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateAccountRequest message, length delimited. Does not implicitly {@link account.UpdateAccountRequest.verify|verify} messages.
         * @param message UpdateAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IUpdateAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateAccountRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.UpdateAccountRequest;

        /**
         * Decodes an UpdateAccountRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.UpdateAccountRequest;

        /**
         * Verifies an UpdateAccountRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateAccountRequest
         */
        public static fromObject(object: { [k: string]: any }): account.UpdateAccountRequest;

        /**
         * Creates a plain object from an UpdateAccountRequest message. Also converts values to other types if specified.
         * @param message UpdateAccountRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.UpdateAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateAccountRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateAccountResponse. */
    interface IUpdateAccountResponse {

        /** UpdateAccountResponse error */
        error?: (common.Error|null);
    }

    /** Represents an UpdateAccountResponse. */
    class UpdateAccountResponse implements IUpdateAccountResponse {

        /**
         * Constructs a new UpdateAccountResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IUpdateAccountResponse);

        /** UpdateAccountResponse error. */
        public error: common.Error;

        /**
         * Creates a new UpdateAccountResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateAccountResponse instance
         */
        public static create(properties?: account.IUpdateAccountResponse): account.UpdateAccountResponse;

        /**
         * Encodes the specified UpdateAccountResponse message. Does not implicitly {@link account.UpdateAccountResponse.verify|verify} messages.
         * @param message UpdateAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IUpdateAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateAccountResponse message, length delimited. Does not implicitly {@link account.UpdateAccountResponse.verify|verify} messages.
         * @param message UpdateAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IUpdateAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateAccountResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.UpdateAccountResponse;

        /**
         * Decodes an UpdateAccountResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.UpdateAccountResponse;

        /**
         * Verifies an UpdateAccountResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateAccountResponse
         */
        public static fromObject(object: { [k: string]: any }): account.UpdateAccountResponse;

        /**
         * Creates a plain object from an UpdateAccountResponse message. Also converts values to other types if specified.
         * @param message UpdateAccountResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.UpdateAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateAccountResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteAccountRequest. */
    interface IDeleteAccountRequest {

        /** DeleteAccountRequest id */
        id?: (number|Long|null);
    }

    /** Represents a DeleteAccountRequest. */
    class DeleteAccountRequest implements IDeleteAccountRequest {

        /**
         * Constructs a new DeleteAccountRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IDeleteAccountRequest);

        /** DeleteAccountRequest id. */
        public id: (number|Long);

        /**
         * Creates a new DeleteAccountRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteAccountRequest instance
         */
        public static create(properties?: account.IDeleteAccountRequest): account.DeleteAccountRequest;

        /**
         * Encodes the specified DeleteAccountRequest message. Does not implicitly {@link account.DeleteAccountRequest.verify|verify} messages.
         * @param message DeleteAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IDeleteAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteAccountRequest message, length delimited. Does not implicitly {@link account.DeleteAccountRequest.verify|verify} messages.
         * @param message DeleteAccountRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IDeleteAccountRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteAccountRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.DeleteAccountRequest;

        /**
         * Decodes a DeleteAccountRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.DeleteAccountRequest;

        /**
         * Verifies a DeleteAccountRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteAccountRequest
         */
        public static fromObject(object: { [k: string]: any }): account.DeleteAccountRequest;

        /**
         * Creates a plain object from a DeleteAccountRequest message. Also converts values to other types if specified.
         * @param message DeleteAccountRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.DeleteAccountRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteAccountRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteAccountResponse. */
    interface IDeleteAccountResponse {

        /** DeleteAccountResponse error */
        error?: (common.Error|null);
    }

    /** Represents a DeleteAccountResponse. */
    class DeleteAccountResponse implements IDeleteAccountResponse {

        /**
         * Constructs a new DeleteAccountResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: account.IDeleteAccountResponse);

        /** DeleteAccountResponse error. */
        public error: common.Error;

        /**
         * Creates a new DeleteAccountResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteAccountResponse instance
         */
        public static create(properties?: account.IDeleteAccountResponse): account.DeleteAccountResponse;

        /**
         * Encodes the specified DeleteAccountResponse message. Does not implicitly {@link account.DeleteAccountResponse.verify|verify} messages.
         * @param message DeleteAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: account.IDeleteAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteAccountResponse message, length delimited. Does not implicitly {@link account.DeleteAccountResponse.verify|verify} messages.
         * @param message DeleteAccountResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: account.IDeleteAccountResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteAccountResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): account.DeleteAccountResponse;

        /**
         * Decodes a DeleteAccountResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): account.DeleteAccountResponse;

        /**
         * Verifies a DeleteAccountResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteAccountResponse
         */
        public static fromObject(object: { [k: string]: any }): account.DeleteAccountResponse;

        /**
         * Creates a plain object from a DeleteAccountResponse message. Also converts values to other types if specified.
         * @param message DeleteAccountResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: account.DeleteAccountResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteAccountResponse to JSON.
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
