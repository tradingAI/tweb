/*eslint-disable default-case, block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const account = $root.account = (() => {

    /**
     * Namespace account.
     * @exports account
     * @namespace
     */
    const account = {};

    account.FetchAccountRequest = (function() {

        /**
         * Properties of a FetchAccountRequest.
         * @memberof account
         * @interface IFetchAccountRequest
         */

        /**
         * Constructs a new FetchAccountRequest.
         * @memberof account
         * @classdesc Represents a FetchAccountRequest.
         * @implements IFetchAccountRequest
         * @constructor
         * @param {account.IFetchAccountRequest=} [properties] Properties to set
         */
        function FetchAccountRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FetchAccountRequest instance using the specified properties.
         * @function create
         * @memberof account.FetchAccountRequest
         * @static
         * @param {account.IFetchAccountRequest=} [properties] Properties to set
         * @returns {account.FetchAccountRequest} FetchAccountRequest instance
         */
        FetchAccountRequest.create = function create(properties) {
            return new FetchAccountRequest(properties);
        };

        /**
         * Encodes the specified FetchAccountRequest message. Does not implicitly {@link account.FetchAccountRequest.verify|verify} messages.
         * @function encode
         * @memberof account.FetchAccountRequest
         * @static
         * @param {account.IFetchAccountRequest} message FetchAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchAccountRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FetchAccountRequest message, length delimited. Does not implicitly {@link account.FetchAccountRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.FetchAccountRequest
         * @static
         * @param {account.IFetchAccountRequest} message FetchAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchAccountRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchAccountRequest message from the specified reader or buffer.
         * @function decode
         * @memberof account.FetchAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.FetchAccountRequest} FetchAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchAccountRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.FetchAccountRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchAccountRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.FetchAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.FetchAccountRequest} FetchAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchAccountRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchAccountRequest message.
         * @function verify
         * @memberof account.FetchAccountRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchAccountRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a FetchAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.FetchAccountRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.FetchAccountRequest} FetchAccountRequest
         */
        FetchAccountRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.account.FetchAccountRequest)
                return object;
            return new $root.account.FetchAccountRequest();
        };

        /**
         * Creates a plain object from a FetchAccountRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.FetchAccountRequest
         * @static
         * @param {account.FetchAccountRequest} message FetchAccountRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchAccountRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FetchAccountRequest to JSON.
         * @function toJSON
         * @memberof account.FetchAccountRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchAccountRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchAccountRequest;
    })();

    account.FetchAccountResponse = (function() {

        /**
         * Properties of a FetchAccountResponse.
         * @memberof account
         * @interface IFetchAccountResponse
         * @property {common.Error|null} [error] FetchAccountResponse error
         * @property {Array.<user.IUser>|null} [accounts] FetchAccountResponse accounts
         */

        /**
         * Constructs a new FetchAccountResponse.
         * @memberof account
         * @classdesc Represents a FetchAccountResponse.
         * @implements IFetchAccountResponse
         * @constructor
         * @param {account.IFetchAccountResponse=} [properties] Properties to set
         */
        function FetchAccountResponse(properties) {
            this.accounts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FetchAccountResponse error.
         * @member {common.Error} error
         * @memberof account.FetchAccountResponse
         * @instance
         */
        FetchAccountResponse.prototype.error = 0;

        /**
         * FetchAccountResponse accounts.
         * @member {Array.<user.IUser>} accounts
         * @memberof account.FetchAccountResponse
         * @instance
         */
        FetchAccountResponse.prototype.accounts = $util.emptyArray;

        /**
         * Creates a new FetchAccountResponse instance using the specified properties.
         * @function create
         * @memberof account.FetchAccountResponse
         * @static
         * @param {account.IFetchAccountResponse=} [properties] Properties to set
         * @returns {account.FetchAccountResponse} FetchAccountResponse instance
         */
        FetchAccountResponse.create = function create(properties) {
            return new FetchAccountResponse(properties);
        };

        /**
         * Encodes the specified FetchAccountResponse message. Does not implicitly {@link account.FetchAccountResponse.verify|verify} messages.
         * @function encode
         * @memberof account.FetchAccountResponse
         * @static
         * @param {account.IFetchAccountResponse} message FetchAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchAccountResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.accounts != null && message.accounts.length)
                for (let i = 0; i < message.accounts.length; ++i)
                    $root.user.User.encode(message.accounts[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FetchAccountResponse message, length delimited. Does not implicitly {@link account.FetchAccountResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.FetchAccountResponse
         * @static
         * @param {account.IFetchAccountResponse} message FetchAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchAccountResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchAccountResponse message from the specified reader or buffer.
         * @function decode
         * @memberof account.FetchAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.FetchAccountResponse} FetchAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchAccountResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.FetchAccountResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    if (!(message.accounts && message.accounts.length))
                        message.accounts = [];
                    message.accounts.push($root.user.User.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchAccountResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.FetchAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.FetchAccountResponse} FetchAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchAccountResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchAccountResponse message.
         * @function verify
         * @memberof account.FetchAccountResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchAccountResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.accounts != null && message.hasOwnProperty("accounts")) {
                if (!Array.isArray(message.accounts))
                    return "accounts: array expected";
                for (let i = 0; i < message.accounts.length; ++i) {
                    let error = $root.user.User.verify(message.accounts[i]);
                    if (error)
                        return "accounts." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FetchAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.FetchAccountResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.FetchAccountResponse} FetchAccountResponse
         */
        FetchAccountResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.account.FetchAccountResponse)
                return object;
            let message = new $root.account.FetchAccountResponse();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "UNKNOWN_ERROR":
            case 1:
                message.error = 1;
                break;
            case "INTERNAL_ERROR":
            case 2:
                message.error = 2;
                break;
            case "INVALID_USERNAME_OR_PASSWORD":
            case 3:
                message.error = 3;
                break;
            }
            if (object.accounts) {
                if (!Array.isArray(object.accounts))
                    throw TypeError(".account.FetchAccountResponse.accounts: array expected");
                message.accounts = [];
                for (let i = 0; i < object.accounts.length; ++i) {
                    if (typeof object.accounts[i] !== "object")
                        throw TypeError(".account.FetchAccountResponse.accounts: object expected");
                    message.accounts[i] = $root.user.User.fromObject(object.accounts[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FetchAccountResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.FetchAccountResponse
         * @static
         * @param {account.FetchAccountResponse} message FetchAccountResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchAccountResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.accounts = [];
            if (options.defaults)
                object.error = options.enums === String ? "NO_ERROR" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            if (message.accounts && message.accounts.length) {
                object.accounts = [];
                for (let j = 0; j < message.accounts.length; ++j)
                    object.accounts[j] = $root.user.User.toObject(message.accounts[j], options);
            }
            return object;
        };

        /**
         * Converts this FetchAccountResponse to JSON.
         * @function toJSON
         * @memberof account.FetchAccountResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchAccountResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchAccountResponse;
    })();

    account.CreateAccountRequest = (function() {

        /**
         * Properties of a CreateAccountRequest.
         * @memberof account
         * @interface ICreateAccountRequest
         * @property {string|null} [username] CreateAccountRequest username
         * @property {string|null} [password] CreateAccountRequest password
         */

        /**
         * Constructs a new CreateAccountRequest.
         * @memberof account
         * @classdesc Represents a CreateAccountRequest.
         * @implements ICreateAccountRequest
         * @constructor
         * @param {account.ICreateAccountRequest=} [properties] Properties to set
         */
        function CreateAccountRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAccountRequest username.
         * @member {string} username
         * @memberof account.CreateAccountRequest
         * @instance
         */
        CreateAccountRequest.prototype.username = "";

        /**
         * CreateAccountRequest password.
         * @member {string} password
         * @memberof account.CreateAccountRequest
         * @instance
         */
        CreateAccountRequest.prototype.password = "";

        /**
         * Creates a new CreateAccountRequest instance using the specified properties.
         * @function create
         * @memberof account.CreateAccountRequest
         * @static
         * @param {account.ICreateAccountRequest=} [properties] Properties to set
         * @returns {account.CreateAccountRequest} CreateAccountRequest instance
         */
        CreateAccountRequest.create = function create(properties) {
            return new CreateAccountRequest(properties);
        };

        /**
         * Encodes the specified CreateAccountRequest message. Does not implicitly {@link account.CreateAccountRequest.verify|verify} messages.
         * @function encode
         * @memberof account.CreateAccountRequest
         * @static
         * @param {account.ICreateAccountRequest} message CreateAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAccountRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified CreateAccountRequest message, length delimited. Does not implicitly {@link account.CreateAccountRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.CreateAccountRequest
         * @static
         * @param {account.ICreateAccountRequest} message CreateAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAccountRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAccountRequest message from the specified reader or buffer.
         * @function decode
         * @memberof account.CreateAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.CreateAccountRequest} CreateAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAccountRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.CreateAccountRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateAccountRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.CreateAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.CreateAccountRequest} CreateAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAccountRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAccountRequest message.
         * @function verify
         * @memberof account.CreateAccountRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAccountRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a CreateAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.CreateAccountRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.CreateAccountRequest} CreateAccountRequest
         */
        CreateAccountRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.account.CreateAccountRequest)
                return object;
            let message = new $root.account.CreateAccountRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a CreateAccountRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.CreateAccountRequest
         * @static
         * @param {account.CreateAccountRequest} message CreateAccountRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAccountRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this CreateAccountRequest to JSON.
         * @function toJSON
         * @memberof account.CreateAccountRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAccountRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateAccountRequest;
    })();

    account.CreateAccountResponse = (function() {

        /**
         * Properties of a CreateAccountResponse.
         * @memberof account
         * @interface ICreateAccountResponse
         * @property {common.Error|null} [error] CreateAccountResponse error
         */

        /**
         * Constructs a new CreateAccountResponse.
         * @memberof account
         * @classdesc Represents a CreateAccountResponse.
         * @implements ICreateAccountResponse
         * @constructor
         * @param {account.ICreateAccountResponse=} [properties] Properties to set
         */
        function CreateAccountResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateAccountResponse error.
         * @member {common.Error} error
         * @memberof account.CreateAccountResponse
         * @instance
         */
        CreateAccountResponse.prototype.error = 0;

        /**
         * Creates a new CreateAccountResponse instance using the specified properties.
         * @function create
         * @memberof account.CreateAccountResponse
         * @static
         * @param {account.ICreateAccountResponse=} [properties] Properties to set
         * @returns {account.CreateAccountResponse} CreateAccountResponse instance
         */
        CreateAccountResponse.create = function create(properties) {
            return new CreateAccountResponse(properties);
        };

        /**
         * Encodes the specified CreateAccountResponse message. Does not implicitly {@link account.CreateAccountResponse.verify|verify} messages.
         * @function encode
         * @memberof account.CreateAccountResponse
         * @static
         * @param {account.ICreateAccountResponse} message CreateAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAccountResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified CreateAccountResponse message, length delimited. Does not implicitly {@link account.CreateAccountResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.CreateAccountResponse
         * @static
         * @param {account.ICreateAccountResponse} message CreateAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateAccountResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateAccountResponse message from the specified reader or buffer.
         * @function decode
         * @memberof account.CreateAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.CreateAccountResponse} CreateAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAccountResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.CreateAccountResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateAccountResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.CreateAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.CreateAccountResponse} CreateAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateAccountResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateAccountResponse message.
         * @function verify
         * @memberof account.CreateAccountResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateAccountResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a CreateAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.CreateAccountResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.CreateAccountResponse} CreateAccountResponse
         */
        CreateAccountResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.account.CreateAccountResponse)
                return object;
            let message = new $root.account.CreateAccountResponse();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "UNKNOWN_ERROR":
            case 1:
                message.error = 1;
                break;
            case "INTERNAL_ERROR":
            case 2:
                message.error = 2;
                break;
            case "INVALID_USERNAME_OR_PASSWORD":
            case 3:
                message.error = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateAccountResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.CreateAccountResponse
         * @static
         * @param {account.CreateAccountResponse} message CreateAccountResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateAccountResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.error = options.enums === String ? "NO_ERROR" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            return object;
        };

        /**
         * Converts this CreateAccountResponse to JSON.
         * @function toJSON
         * @memberof account.CreateAccountResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateAccountResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateAccountResponse;
    })();

    account.UpdateAccountRequest = (function() {

        /**
         * Properties of an UpdateAccountRequest.
         * @memberof account
         * @interface IUpdateAccountRequest
         * @property {number|Long|null} [id] UpdateAccountRequest id
         * @property {string|null} [username] UpdateAccountRequest username
         */

        /**
         * Constructs a new UpdateAccountRequest.
         * @memberof account
         * @classdesc Represents an UpdateAccountRequest.
         * @implements IUpdateAccountRequest
         * @constructor
         * @param {account.IUpdateAccountRequest=} [properties] Properties to set
         */
        function UpdateAccountRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAccountRequest id.
         * @member {number|Long} id
         * @memberof account.UpdateAccountRequest
         * @instance
         */
        UpdateAccountRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * UpdateAccountRequest username.
         * @member {string} username
         * @memberof account.UpdateAccountRequest
         * @instance
         */
        UpdateAccountRequest.prototype.username = "";

        /**
         * Creates a new UpdateAccountRequest instance using the specified properties.
         * @function create
         * @memberof account.UpdateAccountRequest
         * @static
         * @param {account.IUpdateAccountRequest=} [properties] Properties to set
         * @returns {account.UpdateAccountRequest} UpdateAccountRequest instance
         */
        UpdateAccountRequest.create = function create(properties) {
            return new UpdateAccountRequest(properties);
        };

        /**
         * Encodes the specified UpdateAccountRequest message. Does not implicitly {@link account.UpdateAccountRequest.verify|verify} messages.
         * @function encode
         * @memberof account.UpdateAccountRequest
         * @static
         * @param {account.IUpdateAccountRequest} message UpdateAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAccountRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified UpdateAccountRequest message, length delimited. Does not implicitly {@link account.UpdateAccountRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.UpdateAccountRequest
         * @static
         * @param {account.IUpdateAccountRequest} message UpdateAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAccountRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAccountRequest message from the specified reader or buffer.
         * @function decode
         * @memberof account.UpdateAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.UpdateAccountRequest} UpdateAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAccountRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.UpdateAccountRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateAccountRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.UpdateAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.UpdateAccountRequest} UpdateAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAccountRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAccountRequest message.
         * @function verify
         * @memberof account.UpdateAccountRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAccountRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates an UpdateAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.UpdateAccountRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.UpdateAccountRequest} UpdateAccountRequest
         */
        UpdateAccountRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.account.UpdateAccountRequest)
                return object;
            let message = new $root.account.UpdateAccountRequest();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from an UpdateAccountRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.UpdateAccountRequest
         * @static
         * @param {account.UpdateAccountRequest} message UpdateAccountRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAccountRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.username = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this UpdateAccountRequest to JSON.
         * @function toJSON
         * @memberof account.UpdateAccountRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAccountRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAccountRequest;
    })();

    account.UpdateAccountResponse = (function() {

        /**
         * Properties of an UpdateAccountResponse.
         * @memberof account
         * @interface IUpdateAccountResponse
         * @property {common.Error|null} [error] UpdateAccountResponse error
         */

        /**
         * Constructs a new UpdateAccountResponse.
         * @memberof account
         * @classdesc Represents an UpdateAccountResponse.
         * @implements IUpdateAccountResponse
         * @constructor
         * @param {account.IUpdateAccountResponse=} [properties] Properties to set
         */
        function UpdateAccountResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateAccountResponse error.
         * @member {common.Error} error
         * @memberof account.UpdateAccountResponse
         * @instance
         */
        UpdateAccountResponse.prototype.error = 0;

        /**
         * Creates a new UpdateAccountResponse instance using the specified properties.
         * @function create
         * @memberof account.UpdateAccountResponse
         * @static
         * @param {account.IUpdateAccountResponse=} [properties] Properties to set
         * @returns {account.UpdateAccountResponse} UpdateAccountResponse instance
         */
        UpdateAccountResponse.create = function create(properties) {
            return new UpdateAccountResponse(properties);
        };

        /**
         * Encodes the specified UpdateAccountResponse message. Does not implicitly {@link account.UpdateAccountResponse.verify|verify} messages.
         * @function encode
         * @memberof account.UpdateAccountResponse
         * @static
         * @param {account.IUpdateAccountResponse} message UpdateAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAccountResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified UpdateAccountResponse message, length delimited. Does not implicitly {@link account.UpdateAccountResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.UpdateAccountResponse
         * @static
         * @param {account.IUpdateAccountResponse} message UpdateAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateAccountResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateAccountResponse message from the specified reader or buffer.
         * @function decode
         * @memberof account.UpdateAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.UpdateAccountResponse} UpdateAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAccountResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.UpdateAccountResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateAccountResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.UpdateAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.UpdateAccountResponse} UpdateAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateAccountResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateAccountResponse message.
         * @function verify
         * @memberof account.UpdateAccountResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateAccountResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates an UpdateAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.UpdateAccountResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.UpdateAccountResponse} UpdateAccountResponse
         */
        UpdateAccountResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.account.UpdateAccountResponse)
                return object;
            let message = new $root.account.UpdateAccountResponse();
            switch (object.error) {
            case "NO_ERROR":
            case 0:
                message.error = 0;
                break;
            case "UNKNOWN_ERROR":
            case 1:
                message.error = 1;
                break;
            case "INTERNAL_ERROR":
            case 2:
                message.error = 2;
                break;
            case "INVALID_USERNAME_OR_PASSWORD":
            case 3:
                message.error = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateAccountResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.UpdateAccountResponse
         * @static
         * @param {account.UpdateAccountResponse} message UpdateAccountResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateAccountResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.error = options.enums === String ? "NO_ERROR" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            return object;
        };

        /**
         * Converts this UpdateAccountResponse to JSON.
         * @function toJSON
         * @memberof account.UpdateAccountResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateAccountResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateAccountResponse;
    })();

    account.DeleteAccountRequest = (function() {

        /**
         * Properties of a DeleteAccountRequest.
         * @memberof account
         * @interface IDeleteAccountRequest
         * @property {number|Long|null} [id] DeleteAccountRequest id
         */

        /**
         * Constructs a new DeleteAccountRequest.
         * @memberof account
         * @classdesc Represents a DeleteAccountRequest.
         * @implements IDeleteAccountRequest
         * @constructor
         * @param {account.IDeleteAccountRequest=} [properties] Properties to set
         */
        function DeleteAccountRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteAccountRequest id.
         * @member {number|Long} id
         * @memberof account.DeleteAccountRequest
         * @instance
         */
        DeleteAccountRequest.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new DeleteAccountRequest instance using the specified properties.
         * @function create
         * @memberof account.DeleteAccountRequest
         * @static
         * @param {account.IDeleteAccountRequest=} [properties] Properties to set
         * @returns {account.DeleteAccountRequest} DeleteAccountRequest instance
         */
        DeleteAccountRequest.create = function create(properties) {
            return new DeleteAccountRequest(properties);
        };

        /**
         * Encodes the specified DeleteAccountRequest message. Does not implicitly {@link account.DeleteAccountRequest.verify|verify} messages.
         * @function encode
         * @memberof account.DeleteAccountRequest
         * @static
         * @param {account.IDeleteAccountRequest} message DeleteAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAccountRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            return writer;
        };

        /**
         * Encodes the specified DeleteAccountRequest message, length delimited. Does not implicitly {@link account.DeleteAccountRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.DeleteAccountRequest
         * @static
         * @param {account.IDeleteAccountRequest} message DeleteAccountRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAccountRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAccountRequest message from the specified reader or buffer.
         * @function decode
         * @memberof account.DeleteAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.DeleteAccountRequest} DeleteAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAccountRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.DeleteAccountRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteAccountRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.DeleteAccountRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.DeleteAccountRequest} DeleteAccountRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAccountRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAccountRequest message.
         * @function verify
         * @memberof account.DeleteAccountRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAccountRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates a DeleteAccountRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.DeleteAccountRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.DeleteAccountRequest} DeleteAccountRequest
         */
        DeleteAccountRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.account.DeleteAccountRequest)
                return object;
            let message = new $root.account.DeleteAccountRequest();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a DeleteAccountRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.DeleteAccountRequest
         * @static
         * @param {account.DeleteAccountRequest} message DeleteAccountRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAccountRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            return object;
        };

        /**
         * Converts this DeleteAccountRequest to JSON.
         * @function toJSON
         * @memberof account.DeleteAccountRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAccountRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteAccountRequest;
    })();

    account.DeleteAccountResponse = (function() {

        /**
         * Properties of a DeleteAccountResponse.
         * @memberof account
         * @interface IDeleteAccountResponse
         */

        /**
         * Constructs a new DeleteAccountResponse.
         * @memberof account
         * @classdesc Represents a DeleteAccountResponse.
         * @implements IDeleteAccountResponse
         * @constructor
         * @param {account.IDeleteAccountResponse=} [properties] Properties to set
         */
        function DeleteAccountResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DeleteAccountResponse instance using the specified properties.
         * @function create
         * @memberof account.DeleteAccountResponse
         * @static
         * @param {account.IDeleteAccountResponse=} [properties] Properties to set
         * @returns {account.DeleteAccountResponse} DeleteAccountResponse instance
         */
        DeleteAccountResponse.create = function create(properties) {
            return new DeleteAccountResponse(properties);
        };

        /**
         * Encodes the specified DeleteAccountResponse message. Does not implicitly {@link account.DeleteAccountResponse.verify|verify} messages.
         * @function encode
         * @memberof account.DeleteAccountResponse
         * @static
         * @param {account.IDeleteAccountResponse} message DeleteAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAccountResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DeleteAccountResponse message, length delimited. Does not implicitly {@link account.DeleteAccountResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof account.DeleteAccountResponse
         * @static
         * @param {account.IDeleteAccountResponse} message DeleteAccountResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteAccountResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteAccountResponse message from the specified reader or buffer.
         * @function decode
         * @memberof account.DeleteAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {account.DeleteAccountResponse} DeleteAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAccountResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.account.DeleteAccountResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteAccountResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof account.DeleteAccountResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {account.DeleteAccountResponse} DeleteAccountResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteAccountResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteAccountResponse message.
         * @function verify
         * @memberof account.DeleteAccountResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteAccountResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DeleteAccountResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof account.DeleteAccountResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {account.DeleteAccountResponse} DeleteAccountResponse
         */
        DeleteAccountResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.account.DeleteAccountResponse)
                return object;
            return new $root.account.DeleteAccountResponse();
        };

        /**
         * Creates a plain object from a DeleteAccountResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof account.DeleteAccountResponse
         * @static
         * @param {account.DeleteAccountResponse} message DeleteAccountResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteAccountResponse.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DeleteAccountResponse to JSON.
         * @function toJSON
         * @memberof account.DeleteAccountResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteAccountResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteAccountResponse;
    })();

    return account;
})();

export const user = $root.user = (() => {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    const user = {};

    /**
     * UserRole enum.
     * @name user.UserRole
     * @enum {string}
     * @property {number} UNKNOWN_USER_ROLE=0 UNKNOWN_USER_ROLE value
     * @property {number} ROLE_ADMIN=1 ROLE_ADMIN value
     * @property {number} ROLE_USER=2 ROLE_USER value
     */
    user.UserRole = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_USER_ROLE"] = 0;
        values[valuesById[1] = "ROLE_ADMIN"] = 1;
        values[valuesById[2] = "ROLE_USER"] = 2;
        return values;
    })();

    user.User = (function() {

        /**
         * Properties of a User.
         * @memberof user
         * @interface IUser
         * @property {number|Long|null} [id] User id
         * @property {user.UserRole|null} [role] User role
         * @property {string|null} [nickname] User nickname
         */

        /**
         * Constructs a new User.
         * @memberof user
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {user.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {number|Long} id
         * @memberof user.User
         * @instance
         */
        User.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * User role.
         * @member {user.UserRole} role
         * @memberof user.User
         * @instance
         */
        User.prototype.role = 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof user.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof user.User
         * @static
         * @param {user.IUser=} [properties] Properties to set
         * @returns {user.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encode
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.id);
            if (message.role != null && message.hasOwnProperty("role"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.role = reader.int32();
                    break;
                case 3:
                    message.nickname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.user.User)
                return object;
            let message = new $root.user.User();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = true;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber(true);
            switch (object.role) {
            case "UNKNOWN_USER_ROLE":
            case 0:
                message.role = 0;
                break;
            case "ROLE_ADMIN":
            case 1:
                message.role = 1;
                break;
            case "ROLE_USER":
            case 2:
                message.role = 2;
                break;
            }
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.User
         * @static
         * @param {user.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, true);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.role = options.enums === String ? "UNKNOWN_USER_ROLE" : 0;
                object.nickname = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber(true) : message.id;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.user.UserRole[message.role] : message.role;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof user.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return user;
})();

export const common = $root.common = (() => {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    const common = {};

    /**
     * Error enum.
     * @name common.Error
     * @enum {string}
     * @property {number} NO_ERROR=0 NO_ERROR value
     * @property {number} UNKNOWN_ERROR=1 UNKNOWN_ERROR value
     * @property {number} INTERNAL_ERROR=2 INTERNAL_ERROR value
     * @property {number} INVALID_USERNAME_OR_PASSWORD=3 INVALID_USERNAME_OR_PASSWORD value
     */
    common.Error = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NO_ERROR"] = 0;
        values[valuesById[1] = "UNKNOWN_ERROR"] = 1;
        values[valuesById[2] = "INTERNAL_ERROR"] = 2;
        values[valuesById[3] = "INVALID_USERNAME_OR_PASSWORD"] = 3;
        return values;
    })();

    common.StockDaily = (function() {

        /**
         * Properties of a StockDaily.
         * @memberof common
         * @interface IStockDaily
         * @property {string|null} [ts_code] StockDaily ts_code
         * @property {string|null} [trade_date] StockDaily trade_date
         * @property {number|null} [open] StockDaily open
         * @property {number|null} [high] StockDaily high
         * @property {number|null} [low] StockDaily low
         * @property {number|null} [close] StockDaily close
         * @property {number|null} [pre_close] StockDaily pre_close
         * @property {number|null} [change] StockDaily change
         * @property {number|null} [pct_chg] StockDaily pct_chg
         * @property {number|null} [vol] StockDaily vol
         * @property {number|null} [amount] StockDaily amount
         */

        /**
         * Constructs a new StockDaily.
         * @memberof common
         * @classdesc Represents a StockDaily.
         * @implements IStockDaily
         * @constructor
         * @param {common.IStockDaily=} [properties] Properties to set
         */
        function StockDaily(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StockDaily ts_code.
         * @member {string} ts_code
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.ts_code = "";

        /**
         * StockDaily trade_date.
         * @member {string} trade_date
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.trade_date = "";

        /**
         * StockDaily open.
         * @member {number} open
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.open = 0;

        /**
         * StockDaily high.
         * @member {number} high
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.high = 0;

        /**
         * StockDaily low.
         * @member {number} low
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.low = 0;

        /**
         * StockDaily close.
         * @member {number} close
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.close = 0;

        /**
         * StockDaily pre_close.
         * @member {number} pre_close
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.pre_close = 0;

        /**
         * StockDaily change.
         * @member {number} change
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.change = 0;

        /**
         * StockDaily pct_chg.
         * @member {number} pct_chg
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.pct_chg = 0;

        /**
         * StockDaily vol.
         * @member {number} vol
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.vol = 0;

        /**
         * StockDaily amount.
         * @member {number} amount
         * @memberof common.StockDaily
         * @instance
         */
        StockDaily.prototype.amount = 0;

        /**
         * Creates a new StockDaily instance using the specified properties.
         * @function create
         * @memberof common.StockDaily
         * @static
         * @param {common.IStockDaily=} [properties] Properties to set
         * @returns {common.StockDaily} StockDaily instance
         */
        StockDaily.create = function create(properties) {
            return new StockDaily(properties);
        };

        /**
         * Encodes the specified StockDaily message. Does not implicitly {@link common.StockDaily.verify|verify} messages.
         * @function encode
         * @memberof common.StockDaily
         * @static
         * @param {common.IStockDaily} message StockDaily message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StockDaily.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ts_code != null && message.hasOwnProperty("ts_code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ts_code);
            if (message.trade_date != null && message.hasOwnProperty("trade_date"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.trade_date);
            if (message.open != null && message.hasOwnProperty("open"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.open);
            if (message.high != null && message.hasOwnProperty("high"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.high);
            if (message.low != null && message.hasOwnProperty("low"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.low);
            if (message.close != null && message.hasOwnProperty("close"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.close);
            if (message.pre_close != null && message.hasOwnProperty("pre_close"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.pre_close);
            if (message.change != null && message.hasOwnProperty("change"))
                writer.uint32(/* id 8, wireType 1 =*/65).double(message.change);
            if (message.pct_chg != null && message.hasOwnProperty("pct_chg"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.pct_chg);
            if (message.vol != null && message.hasOwnProperty("vol"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.vol);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.amount);
            return writer;
        };

        /**
         * Encodes the specified StockDaily message, length delimited. Does not implicitly {@link common.StockDaily.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.StockDaily
         * @static
         * @param {common.IStockDaily} message StockDaily message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StockDaily.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StockDaily message from the specified reader or buffer.
         * @function decode
         * @memberof common.StockDaily
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.StockDaily} StockDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StockDaily.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.StockDaily();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ts_code = reader.string();
                    break;
                case 2:
                    message.trade_date = reader.string();
                    break;
                case 3:
                    message.open = reader.double();
                    break;
                case 4:
                    message.high = reader.double();
                    break;
                case 5:
                    message.low = reader.double();
                    break;
                case 6:
                    message.close = reader.double();
                    break;
                case 7:
                    message.pre_close = reader.double();
                    break;
                case 8:
                    message.change = reader.double();
                    break;
                case 9:
                    message.pct_chg = reader.double();
                    break;
                case 10:
                    message.vol = reader.double();
                    break;
                case 11:
                    message.amount = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StockDaily message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.StockDaily
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.StockDaily} StockDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StockDaily.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StockDaily message.
         * @function verify
         * @memberof common.StockDaily
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StockDaily.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ts_code != null && message.hasOwnProperty("ts_code"))
                if (!$util.isString(message.ts_code))
                    return "ts_code: string expected";
            if (message.trade_date != null && message.hasOwnProperty("trade_date"))
                if (!$util.isString(message.trade_date))
                    return "trade_date: string expected";
            if (message.open != null && message.hasOwnProperty("open"))
                if (typeof message.open !== "number")
                    return "open: number expected";
            if (message.high != null && message.hasOwnProperty("high"))
                if (typeof message.high !== "number")
                    return "high: number expected";
            if (message.low != null && message.hasOwnProperty("low"))
                if (typeof message.low !== "number")
                    return "low: number expected";
            if (message.close != null && message.hasOwnProperty("close"))
                if (typeof message.close !== "number")
                    return "close: number expected";
            if (message.pre_close != null && message.hasOwnProperty("pre_close"))
                if (typeof message.pre_close !== "number")
                    return "pre_close: number expected";
            if (message.change != null && message.hasOwnProperty("change"))
                if (typeof message.change !== "number")
                    return "change: number expected";
            if (message.pct_chg != null && message.hasOwnProperty("pct_chg"))
                if (typeof message.pct_chg !== "number")
                    return "pct_chg: number expected";
            if (message.vol != null && message.hasOwnProperty("vol"))
                if (typeof message.vol !== "number")
                    return "vol: number expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a StockDaily message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.StockDaily
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.StockDaily} StockDaily
         */
        StockDaily.fromObject = function fromObject(object) {
            if (object instanceof $root.common.StockDaily)
                return object;
            let message = new $root.common.StockDaily();
            if (object.ts_code != null)
                message.ts_code = String(object.ts_code);
            if (object.trade_date != null)
                message.trade_date = String(object.trade_date);
            if (object.open != null)
                message.open = Number(object.open);
            if (object.high != null)
                message.high = Number(object.high);
            if (object.low != null)
                message.low = Number(object.low);
            if (object.close != null)
                message.close = Number(object.close);
            if (object.pre_close != null)
                message.pre_close = Number(object.pre_close);
            if (object.change != null)
                message.change = Number(object.change);
            if (object.pct_chg != null)
                message.pct_chg = Number(object.pct_chg);
            if (object.vol != null)
                message.vol = Number(object.vol);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a StockDaily message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.StockDaily
         * @static
         * @param {common.StockDaily} message StockDaily
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StockDaily.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.ts_code = "";
                object.trade_date = "";
                object.open = 0;
                object.high = 0;
                object.low = 0;
                object.close = 0;
                object.pre_close = 0;
                object.change = 0;
                object.pct_chg = 0;
                object.vol = 0;
                object.amount = 0;
            }
            if (message.ts_code != null && message.hasOwnProperty("ts_code"))
                object.ts_code = message.ts_code;
            if (message.trade_date != null && message.hasOwnProperty("trade_date"))
                object.trade_date = message.trade_date;
            if (message.open != null && message.hasOwnProperty("open"))
                object.open = options.json && !isFinite(message.open) ? String(message.open) : message.open;
            if (message.high != null && message.hasOwnProperty("high"))
                object.high = options.json && !isFinite(message.high) ? String(message.high) : message.high;
            if (message.low != null && message.hasOwnProperty("low"))
                object.low = options.json && !isFinite(message.low) ? String(message.low) : message.low;
            if (message.close != null && message.hasOwnProperty("close"))
                object.close = options.json && !isFinite(message.close) ? String(message.close) : message.close;
            if (message.pre_close != null && message.hasOwnProperty("pre_close"))
                object.pre_close = options.json && !isFinite(message.pre_close) ? String(message.pre_close) : message.pre_close;
            if (message.change != null && message.hasOwnProperty("change"))
                object.change = options.json && !isFinite(message.change) ? String(message.change) : message.change;
            if (message.pct_chg != null && message.hasOwnProperty("pct_chg"))
                object.pct_chg = options.json && !isFinite(message.pct_chg) ? String(message.pct_chg) : message.pct_chg;
            if (message.vol != null && message.hasOwnProperty("vol"))
                object.vol = options.json && !isFinite(message.vol) ? String(message.vol) : message.vol;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this StockDaily to JSON.
         * @function toJSON
         * @memberof common.StockDaily
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StockDaily.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StockDaily;
    })();

    return common;
})();

export { $root as default };
