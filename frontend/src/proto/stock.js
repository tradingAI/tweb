/*eslint-disable default-case, block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const stock = $root.stock = (() => {

    /**
     * Namespace stock.
     * @exports stock
     * @namespace
     */
    const stock = {};

    stock.FetchStockDailyRequest = (function() {

        /**
         * Properties of a FetchStockDailyRequest.
         * @memberof stock
         * @interface IFetchStockDailyRequest
         * @property {string|null} [code] FetchStockDailyRequest code
         * @property {number|Long|null} [start] FetchStockDailyRequest start
         * @property {number|Long|null} [end] FetchStockDailyRequest end
         */

        /**
         * Constructs a new FetchStockDailyRequest.
         * @memberof stock
         * @classdesc Represents a FetchStockDailyRequest.
         * @implements IFetchStockDailyRequest
         * @constructor
         * @param {stock.IFetchStockDailyRequest=} [properties] Properties to set
         */
        function FetchStockDailyRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FetchStockDailyRequest code.
         * @member {string} code
         * @memberof stock.FetchStockDailyRequest
         * @instance
         */
        FetchStockDailyRequest.prototype.code = "";

        /**
         * FetchStockDailyRequest start.
         * @member {number|Long} start
         * @memberof stock.FetchStockDailyRequest
         * @instance
         */
        FetchStockDailyRequest.prototype.start = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FetchStockDailyRequest end.
         * @member {number|Long} end
         * @memberof stock.FetchStockDailyRequest
         * @instance
         */
        FetchStockDailyRequest.prototype.end = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FetchStockDailyRequest instance using the specified properties.
         * @function create
         * @memberof stock.FetchStockDailyRequest
         * @static
         * @param {stock.IFetchStockDailyRequest=} [properties] Properties to set
         * @returns {stock.FetchStockDailyRequest} FetchStockDailyRequest instance
         */
        FetchStockDailyRequest.create = function create(properties) {
            return new FetchStockDailyRequest(properties);
        };

        /**
         * Encodes the specified FetchStockDailyRequest message. Does not implicitly {@link stock.FetchStockDailyRequest.verify|verify} messages.
         * @function encode
         * @memberof stock.FetchStockDailyRequest
         * @static
         * @param {stock.IFetchStockDailyRequest} message FetchStockDailyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchStockDailyRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && message.hasOwnProperty("code"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            if (message.start != null && message.hasOwnProperty("start"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.start);
            if (message.end != null && message.hasOwnProperty("end"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.end);
            return writer;
        };

        /**
         * Encodes the specified FetchStockDailyRequest message, length delimited. Does not implicitly {@link stock.FetchStockDailyRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof stock.FetchStockDailyRequest
         * @static
         * @param {stock.IFetchStockDailyRequest} message FetchStockDailyRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchStockDailyRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchStockDailyRequest message from the specified reader or buffer.
         * @function decode
         * @memberof stock.FetchStockDailyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {stock.FetchStockDailyRequest} FetchStockDailyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchStockDailyRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.stock.FetchStockDailyRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.start = reader.int64();
                    break;
                case 3:
                    message.end = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchStockDailyRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof stock.FetchStockDailyRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {stock.FetchStockDailyRequest} FetchStockDailyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchStockDailyRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchStockDailyRequest message.
         * @function verify
         * @memberof stock.FetchStockDailyRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchStockDailyRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (!$util.isInteger(message.start) && !(message.start && $util.isInteger(message.start.low) && $util.isInteger(message.start.high)))
                    return "start: integer|Long expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isInteger(message.end) && !(message.end && $util.isInteger(message.end.low) && $util.isInteger(message.end.high)))
                    return "end: integer|Long expected";
            return null;
        };

        /**
         * Creates a FetchStockDailyRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof stock.FetchStockDailyRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {stock.FetchStockDailyRequest} FetchStockDailyRequest
         */
        FetchStockDailyRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.stock.FetchStockDailyRequest)
                return object;
            let message = new $root.stock.FetchStockDailyRequest();
            if (object.code != null)
                message.code = String(object.code);
            if (object.start != null)
                if ($util.Long)
                    (message.start = $util.Long.fromValue(object.start)).unsigned = false;
                else if (typeof object.start === "string")
                    message.start = parseInt(object.start, 10);
                else if (typeof object.start === "number")
                    message.start = object.start;
                else if (typeof object.start === "object")
                    message.start = new $util.LongBits(object.start.low >>> 0, object.start.high >>> 0).toNumber();
            if (object.end != null)
                if ($util.Long)
                    (message.end = $util.Long.fromValue(object.end)).unsigned = false;
                else if (typeof object.end === "string")
                    message.end = parseInt(object.end, 10);
                else if (typeof object.end === "number")
                    message.end = object.end;
                else if (typeof object.end === "object")
                    message.end = new $util.LongBits(object.end.low >>> 0, object.end.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FetchStockDailyRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof stock.FetchStockDailyRequest
         * @static
         * @param {stock.FetchStockDailyRequest} message FetchStockDailyRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchStockDailyRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.code = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.start = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.start = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.end = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.end = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.start != null && message.hasOwnProperty("start"))
                if (typeof message.start === "number")
                    object.start = options.longs === String ? String(message.start) : message.start;
                else
                    object.start = options.longs === String ? $util.Long.prototype.toString.call(message.start) : options.longs === Number ? new $util.LongBits(message.start.low >>> 0, message.start.high >>> 0).toNumber() : message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                if (typeof message.end === "number")
                    object.end = options.longs === String ? String(message.end) : message.end;
                else
                    object.end = options.longs === String ? $util.Long.prototype.toString.call(message.end) : options.longs === Number ? new $util.LongBits(message.end.low >>> 0, message.end.high >>> 0).toNumber() : message.end;
            return object;
        };

        /**
         * Converts this FetchStockDailyRequest to JSON.
         * @function toJSON
         * @memberof stock.FetchStockDailyRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchStockDailyRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchStockDailyRequest;
    })();

    stock.FetchStockDailyResponse = (function() {

        /**
         * Properties of a FetchStockDailyResponse.
         * @memberof stock
         * @interface IFetchStockDailyResponse
         * @property {common.Error|null} [error] FetchStockDailyResponse error
         * @property {Array.<common.IStockDaily>|null} [dailys] FetchStockDailyResponse dailys
         */

        /**
         * Constructs a new FetchStockDailyResponse.
         * @memberof stock
         * @classdesc Represents a FetchStockDailyResponse.
         * @implements IFetchStockDailyResponse
         * @constructor
         * @param {stock.IFetchStockDailyResponse=} [properties] Properties to set
         */
        function FetchStockDailyResponse(properties) {
            this.dailys = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FetchStockDailyResponse error.
         * @member {common.Error} error
         * @memberof stock.FetchStockDailyResponse
         * @instance
         */
        FetchStockDailyResponse.prototype.error = 0;

        /**
         * FetchStockDailyResponse dailys.
         * @member {Array.<common.IStockDaily>} dailys
         * @memberof stock.FetchStockDailyResponse
         * @instance
         */
        FetchStockDailyResponse.prototype.dailys = $util.emptyArray;

        /**
         * Creates a new FetchStockDailyResponse instance using the specified properties.
         * @function create
         * @memberof stock.FetchStockDailyResponse
         * @static
         * @param {stock.IFetchStockDailyResponse=} [properties] Properties to set
         * @returns {stock.FetchStockDailyResponse} FetchStockDailyResponse instance
         */
        FetchStockDailyResponse.create = function create(properties) {
            return new FetchStockDailyResponse(properties);
        };

        /**
         * Encodes the specified FetchStockDailyResponse message. Does not implicitly {@link stock.FetchStockDailyResponse.verify|verify} messages.
         * @function encode
         * @memberof stock.FetchStockDailyResponse
         * @static
         * @param {stock.IFetchStockDailyResponse} message FetchStockDailyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchStockDailyResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.dailys != null && message.dailys.length)
                for (let i = 0; i < message.dailys.length; ++i)
                    $root.common.StockDaily.encode(message.dailys[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FetchStockDailyResponse message, length delimited. Does not implicitly {@link stock.FetchStockDailyResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof stock.FetchStockDailyResponse
         * @static
         * @param {stock.IFetchStockDailyResponse} message FetchStockDailyResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchStockDailyResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchStockDailyResponse message from the specified reader or buffer.
         * @function decode
         * @memberof stock.FetchStockDailyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {stock.FetchStockDailyResponse} FetchStockDailyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchStockDailyResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.stock.FetchStockDailyResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    if (!(message.dailys && message.dailys.length))
                        message.dailys = [];
                    message.dailys.push($root.common.StockDaily.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchStockDailyResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof stock.FetchStockDailyResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {stock.FetchStockDailyResponse} FetchStockDailyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchStockDailyResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchStockDailyResponse message.
         * @function verify
         * @memberof stock.FetchStockDailyResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchStockDailyResponse.verify = function verify(message) {
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
            if (message.dailys != null && message.hasOwnProperty("dailys")) {
                if (!Array.isArray(message.dailys))
                    return "dailys: array expected";
                for (let i = 0; i < message.dailys.length; ++i) {
                    let error = $root.common.StockDaily.verify(message.dailys[i]);
                    if (error)
                        return "dailys." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FetchStockDailyResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof stock.FetchStockDailyResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {stock.FetchStockDailyResponse} FetchStockDailyResponse
         */
        FetchStockDailyResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.stock.FetchStockDailyResponse)
                return object;
            let message = new $root.stock.FetchStockDailyResponse();
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
            if (object.dailys) {
                if (!Array.isArray(object.dailys))
                    throw TypeError(".stock.FetchStockDailyResponse.dailys: array expected");
                message.dailys = [];
                for (let i = 0; i < object.dailys.length; ++i) {
                    if (typeof object.dailys[i] !== "object")
                        throw TypeError(".stock.FetchStockDailyResponse.dailys: object expected");
                    message.dailys[i] = $root.common.StockDaily.fromObject(object.dailys[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FetchStockDailyResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof stock.FetchStockDailyResponse
         * @static
         * @param {stock.FetchStockDailyResponse} message FetchStockDailyResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchStockDailyResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.dailys = [];
            if (options.defaults)
                object.error = options.enums === String ? "NO_ERROR" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            if (message.dailys && message.dailys.length) {
                object.dailys = [];
                for (let j = 0; j < message.dailys.length; ++j)
                    object.dailys[j] = $root.common.StockDaily.toObject(message.dailys[j], options);
            }
            return object;
        };

        /**
         * Converts this FetchStockDailyResponse to JSON.
         * @function toJSON
         * @memberof stock.FetchStockDailyResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchStockDailyResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchStockDailyResponse;
    })();

    return stock;
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

    /**
     * UserRole enum.
     * @name common.UserRole
     * @enum {string}
     * @property {number} UNKNOWN_USER_ROLE=0 UNKNOWN_USER_ROLE value
     * @property {number} ROLE_ADMIN=1 ROLE_ADMIN value
     * @property {number} ROLE_USER=2 ROLE_USER value
     */
    common.UserRole = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_USER_ROLE"] = 0;
        values[valuesById[1] = "ROLE_ADMIN"] = 1;
        values[valuesById[2] = "ROLE_USER"] = 2;
        return values;
    })();

    common.User = (function() {

        /**
         * Properties of a User.
         * @memberof common
         * @interface IUser
         * @property {number|Long|null} [id] User id
         * @property {common.UserRole|null} [role] User role
         * @property {string|null} [nickname] User nickname
         */

        /**
         * Constructs a new User.
         * @memberof common
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {common.IUser=} [properties] Properties to set
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
         * @memberof common.User
         * @instance
         */
        User.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * User role.
         * @member {common.UserRole} role
         * @memberof common.User
         * @instance
         */
        User.prototype.role = 0;

        /**
         * User nickname.
         * @member {string} nickname
         * @memberof common.User
         * @instance
         */
        User.prototype.nickname = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof common.User
         * @static
         * @param {common.IUser=} [properties] Properties to set
         * @returns {common.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link common.User.verify|verify} messages.
         * @function encode
         * @memberof common.User
         * @static
         * @param {common.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.role != null && message.hasOwnProperty("role"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.role);
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nickname);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link common.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.User
         * @static
         * @param {common.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof common.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
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
         * @memberof common.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.User} User
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
         * @memberof common.User
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
         * @memberof common.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.common.User)
                return object;
            let message = new $root.common.User();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
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
         * @memberof common.User
         * @static
         * @param {common.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
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
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.common.UserRole[message.role] : message.role;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof common.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
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
