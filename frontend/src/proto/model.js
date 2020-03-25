/*eslint-disable default-case, block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const model = $root.model = (() => {

    /**
     * Namespace model.
     * @exports model
     * @namespace
     */
    const model = {};

    model.FetchModelRequest = (function() {

        /**
         * Properties of a FetchModelRequest.
         * @memberof model
         * @interface IFetchModelRequest
         */

        /**
         * Constructs a new FetchModelRequest.
         * @memberof model
         * @classdesc Represents a FetchModelRequest.
         * @implements IFetchModelRequest
         * @constructor
         * @param {model.IFetchModelRequest=} [properties] Properties to set
         */
        function FetchModelRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new FetchModelRequest instance using the specified properties.
         * @function create
         * @memberof model.FetchModelRequest
         * @static
         * @param {model.IFetchModelRequest=} [properties] Properties to set
         * @returns {model.FetchModelRequest} FetchModelRequest instance
         */
        FetchModelRequest.create = function create(properties) {
            return new FetchModelRequest(properties);
        };

        /**
         * Encodes the specified FetchModelRequest message. Does not implicitly {@link model.FetchModelRequest.verify|verify} messages.
         * @function encode
         * @memberof model.FetchModelRequest
         * @static
         * @param {model.IFetchModelRequest} message FetchModelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchModelRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified FetchModelRequest message, length delimited. Does not implicitly {@link model.FetchModelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.FetchModelRequest
         * @static
         * @param {model.IFetchModelRequest} message FetchModelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchModelRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchModelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof model.FetchModelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.FetchModelRequest} FetchModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchModelRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.FetchModelRequest();
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
         * Decodes a FetchModelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.FetchModelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.FetchModelRequest} FetchModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchModelRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchModelRequest message.
         * @function verify
         * @memberof model.FetchModelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchModelRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a FetchModelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.FetchModelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.FetchModelRequest} FetchModelRequest
         */
        FetchModelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.model.FetchModelRequest)
                return object;
            return new $root.model.FetchModelRequest();
        };

        /**
         * Creates a plain object from a FetchModelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.FetchModelRequest
         * @static
         * @param {model.FetchModelRequest} message FetchModelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchModelRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this FetchModelRequest to JSON.
         * @function toJSON
         * @memberof model.FetchModelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchModelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchModelRequest;
    })();

    model.FetchModelResponse = (function() {

        /**
         * Properties of a FetchModelResponse.
         * @memberof model
         * @interface IFetchModelResponse
         * @property {common.Error|null} [error] FetchModelResponse error
         * @property {Array.<model.IModel>|null} [models] FetchModelResponse models
         */

        /**
         * Constructs a new FetchModelResponse.
         * @memberof model
         * @classdesc Represents a FetchModelResponse.
         * @implements IFetchModelResponse
         * @constructor
         * @param {model.IFetchModelResponse=} [properties] Properties to set
         */
        function FetchModelResponse(properties) {
            this.models = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FetchModelResponse error.
         * @member {common.Error} error
         * @memberof model.FetchModelResponse
         * @instance
         */
        FetchModelResponse.prototype.error = 0;

        /**
         * FetchModelResponse models.
         * @member {Array.<model.IModel>} models
         * @memberof model.FetchModelResponse
         * @instance
         */
        FetchModelResponse.prototype.models = $util.emptyArray;

        /**
         * Creates a new FetchModelResponse instance using the specified properties.
         * @function create
         * @memberof model.FetchModelResponse
         * @static
         * @param {model.IFetchModelResponse=} [properties] Properties to set
         * @returns {model.FetchModelResponse} FetchModelResponse instance
         */
        FetchModelResponse.create = function create(properties) {
            return new FetchModelResponse(properties);
        };

        /**
         * Encodes the specified FetchModelResponse message. Does not implicitly {@link model.FetchModelResponse.verify|verify} messages.
         * @function encode
         * @memberof model.FetchModelResponse
         * @static
         * @param {model.IFetchModelResponse} message FetchModelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchModelResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.models != null && message.models.length)
                for (let i = 0; i < message.models.length; ++i)
                    $root.model.Model.encode(message.models[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FetchModelResponse message, length delimited. Does not implicitly {@link model.FetchModelResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.FetchModelResponse
         * @static
         * @param {model.IFetchModelResponse} message FetchModelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FetchModelResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FetchModelResponse message from the specified reader or buffer.
         * @function decode
         * @memberof model.FetchModelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.FetchModelResponse} FetchModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchModelResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.FetchModelResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    if (!(message.models && message.models.length))
                        message.models = [];
                    message.models.push($root.model.Model.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FetchModelResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.FetchModelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.FetchModelResponse} FetchModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FetchModelResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FetchModelResponse message.
         * @function verify
         * @memberof model.FetchModelResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FetchModelResponse.verify = function verify(message) {
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
            if (message.models != null && message.hasOwnProperty("models")) {
                if (!Array.isArray(message.models))
                    return "models: array expected";
                for (let i = 0; i < message.models.length; ++i) {
                    let error = $root.model.Model.verify(message.models[i]);
                    if (error)
                        return "models." + error;
                }
            }
            return null;
        };

        /**
         * Creates a FetchModelResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.FetchModelResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.FetchModelResponse} FetchModelResponse
         */
        FetchModelResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.model.FetchModelResponse)
                return object;
            let message = new $root.model.FetchModelResponse();
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
            if (object.models) {
                if (!Array.isArray(object.models))
                    throw TypeError(".model.FetchModelResponse.models: array expected");
                message.models = [];
                for (let i = 0; i < object.models.length; ++i) {
                    if (typeof object.models[i] !== "object")
                        throw TypeError(".model.FetchModelResponse.models: object expected");
                    message.models[i] = $root.model.Model.fromObject(object.models[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a FetchModelResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.FetchModelResponse
         * @static
         * @param {model.FetchModelResponse} message FetchModelResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FetchModelResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.models = [];
            if (options.defaults)
                object.error = options.enums === String ? "NO_ERROR" : 0;
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            if (message.models && message.models.length) {
                object.models = [];
                for (let j = 0; j < message.models.length; ++j)
                    object.models[j] = $root.model.Model.toObject(message.models[j], options);
            }
            return object;
        };

        /**
         * Converts this FetchModelResponse to JSON.
         * @function toJSON
         * @memberof model.FetchModelResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FetchModelResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FetchModelResponse;
    })();

    model.CreateModelRequest = (function() {

        /**
         * Properties of a CreateModelRequest.
         * @memberof model
         * @interface ICreateModelRequest
         * @property {string|null} [name] CreateModelRequest name
         * @property {string|null} [version] CreateModelRequest version
         * @property {string|null} [description] CreateModelRequest description
         * @property {string|null} [file_type] CreateModelRequest file_type
         */

        /**
         * Constructs a new CreateModelRequest.
         * @memberof model
         * @classdesc Represents a CreateModelRequest.
         * @implements ICreateModelRequest
         * @constructor
         * @param {model.ICreateModelRequest=} [properties] Properties to set
         */
        function CreateModelRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateModelRequest name.
         * @member {string} name
         * @memberof model.CreateModelRequest
         * @instance
         */
        CreateModelRequest.prototype.name = "";

        /**
         * CreateModelRequest version.
         * @member {string} version
         * @memberof model.CreateModelRequest
         * @instance
         */
        CreateModelRequest.prototype.version = "";

        /**
         * CreateModelRequest description.
         * @member {string} description
         * @memberof model.CreateModelRequest
         * @instance
         */
        CreateModelRequest.prototype.description = "";

        /**
         * CreateModelRequest file_type.
         * @member {string} file_type
         * @memberof model.CreateModelRequest
         * @instance
         */
        CreateModelRequest.prototype.file_type = "";

        /**
         * Creates a new CreateModelRequest instance using the specified properties.
         * @function create
         * @memberof model.CreateModelRequest
         * @static
         * @param {model.ICreateModelRequest=} [properties] Properties to set
         * @returns {model.CreateModelRequest} CreateModelRequest instance
         */
        CreateModelRequest.create = function create(properties) {
            return new CreateModelRequest(properties);
        };

        /**
         * Encodes the specified CreateModelRequest message. Does not implicitly {@link model.CreateModelRequest.verify|verify} messages.
         * @function encode
         * @memberof model.CreateModelRequest
         * @static
         * @param {model.ICreateModelRequest} message CreateModelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateModelRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.file_type);
            return writer;
        };

        /**
         * Encodes the specified CreateModelRequest message, length delimited. Does not implicitly {@link model.CreateModelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.CreateModelRequest
         * @static
         * @param {model.ICreateModelRequest} message CreateModelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateModelRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateModelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof model.CreateModelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.CreateModelRequest} CreateModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateModelRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.CreateModelRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.file_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateModelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.CreateModelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.CreateModelRequest} CreateModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateModelRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateModelRequest message.
         * @function verify
         * @memberof model.CreateModelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateModelRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                if (!$util.isString(message.file_type))
                    return "file_type: string expected";
            return null;
        };

        /**
         * Creates a CreateModelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.CreateModelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.CreateModelRequest} CreateModelRequest
         */
        CreateModelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.model.CreateModelRequest)
                return object;
            let message = new $root.model.CreateModelRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.version != null)
                message.version = String(object.version);
            if (object.description != null)
                message.description = String(object.description);
            if (object.file_type != null)
                message.file_type = String(object.file_type);
            return message;
        };

        /**
         * Creates a plain object from a CreateModelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.CreateModelRequest
         * @static
         * @param {model.CreateModelRequest} message CreateModelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateModelRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.version = "";
                object.description = "";
                object.file_type = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                object.file_type = message.file_type;
            return object;
        };

        /**
         * Converts this CreateModelRequest to JSON.
         * @function toJSON
         * @memberof model.CreateModelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateModelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateModelRequest;
    })();

    model.CreateModelResponse = (function() {

        /**
         * Properties of a CreateModelResponse.
         * @memberof model
         * @interface ICreateModelResponse
         * @property {common.Error|null} [error] CreateModelResponse error
         * @property {string|null} [id] CreateModelResponse id
         */

        /**
         * Constructs a new CreateModelResponse.
         * @memberof model
         * @classdesc Represents a CreateModelResponse.
         * @implements ICreateModelResponse
         * @constructor
         * @param {model.ICreateModelResponse=} [properties] Properties to set
         */
        function CreateModelResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateModelResponse error.
         * @member {common.Error} error
         * @memberof model.CreateModelResponse
         * @instance
         */
        CreateModelResponse.prototype.error = 0;

        /**
         * CreateModelResponse id.
         * @member {string} id
         * @memberof model.CreateModelResponse
         * @instance
         */
        CreateModelResponse.prototype.id = "";

        /**
         * Creates a new CreateModelResponse instance using the specified properties.
         * @function create
         * @memberof model.CreateModelResponse
         * @static
         * @param {model.ICreateModelResponse=} [properties] Properties to set
         * @returns {model.CreateModelResponse} CreateModelResponse instance
         */
        CreateModelResponse.create = function create(properties) {
            return new CreateModelResponse(properties);
        };

        /**
         * Encodes the specified CreateModelResponse message. Does not implicitly {@link model.CreateModelResponse.verify|verify} messages.
         * @function encode
         * @memberof model.CreateModelResponse
         * @static
         * @param {model.ICreateModelResponse} message CreateModelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateModelResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified CreateModelResponse message, length delimited. Does not implicitly {@link model.CreateModelResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.CreateModelResponse
         * @static
         * @param {model.ICreateModelResponse} message CreateModelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateModelResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateModelResponse message from the specified reader or buffer.
         * @function decode
         * @memberof model.CreateModelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.CreateModelResponse} CreateModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateModelResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.CreateModelResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateModelResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.CreateModelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.CreateModelResponse} CreateModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateModelResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateModelResponse message.
         * @function verify
         * @memberof model.CreateModelResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateModelResponse.verify = function verify(message) {
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
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a CreateModelResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.CreateModelResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.CreateModelResponse} CreateModelResponse
         */
        CreateModelResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.model.CreateModelResponse)
                return object;
            let message = new $root.model.CreateModelResponse();
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
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a CreateModelResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.CreateModelResponse
         * @static
         * @param {model.CreateModelResponse} message CreateModelResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateModelResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "NO_ERROR" : 0;
                object.id = "";
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this CreateModelResponse to JSON.
         * @function toJSON
         * @memberof model.CreateModelResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateModelResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateModelResponse;
    })();

    model.DeleteModelRequest = (function() {

        /**
         * Properties of a DeleteModelRequest.
         * @memberof model
         * @interface IDeleteModelRequest
         * @property {string|null} [id] DeleteModelRequest id
         */

        /**
         * Constructs a new DeleteModelRequest.
         * @memberof model
         * @classdesc Represents a DeleteModelRequest.
         * @implements IDeleteModelRequest
         * @constructor
         * @param {model.IDeleteModelRequest=} [properties] Properties to set
         */
        function DeleteModelRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteModelRequest id.
         * @member {string} id
         * @memberof model.DeleteModelRequest
         * @instance
         */
        DeleteModelRequest.prototype.id = "";

        /**
         * Creates a new DeleteModelRequest instance using the specified properties.
         * @function create
         * @memberof model.DeleteModelRequest
         * @static
         * @param {model.IDeleteModelRequest=} [properties] Properties to set
         * @returns {model.DeleteModelRequest} DeleteModelRequest instance
         */
        DeleteModelRequest.create = function create(properties) {
            return new DeleteModelRequest(properties);
        };

        /**
         * Encodes the specified DeleteModelRequest message. Does not implicitly {@link model.DeleteModelRequest.verify|verify} messages.
         * @function encode
         * @memberof model.DeleteModelRequest
         * @static
         * @param {model.IDeleteModelRequest} message DeleteModelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteModelRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DeleteModelRequest message, length delimited. Does not implicitly {@link model.DeleteModelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.DeleteModelRequest
         * @static
         * @param {model.IDeleteModelRequest} message DeleteModelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteModelRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteModelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof model.DeleteModelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.DeleteModelRequest} DeleteModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteModelRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.DeleteModelRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeleteModelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.DeleteModelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.DeleteModelRequest} DeleteModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteModelRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteModelRequest message.
         * @function verify
         * @memberof model.DeleteModelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteModelRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DeleteModelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.DeleteModelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.DeleteModelRequest} DeleteModelRequest
         */
        DeleteModelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.model.DeleteModelRequest)
                return object;
            let message = new $root.model.DeleteModelRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DeleteModelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.DeleteModelRequest
         * @static
         * @param {model.DeleteModelRequest} message DeleteModelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteModelRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DeleteModelRequest to JSON.
         * @function toJSON
         * @memberof model.DeleteModelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteModelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteModelRequest;
    })();

    model.DeleteModelResponse = (function() {

        /**
         * Properties of a DeleteModelResponse.
         * @memberof model
         * @interface IDeleteModelResponse
         * @property {common.Error|null} [error] DeleteModelResponse error
         */

        /**
         * Constructs a new DeleteModelResponse.
         * @memberof model
         * @classdesc Represents a DeleteModelResponse.
         * @implements IDeleteModelResponse
         * @constructor
         * @param {model.IDeleteModelResponse=} [properties] Properties to set
         */
        function DeleteModelResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeleteModelResponse error.
         * @member {common.Error} error
         * @memberof model.DeleteModelResponse
         * @instance
         */
        DeleteModelResponse.prototype.error = 0;

        /**
         * Creates a new DeleteModelResponse instance using the specified properties.
         * @function create
         * @memberof model.DeleteModelResponse
         * @static
         * @param {model.IDeleteModelResponse=} [properties] Properties to set
         * @returns {model.DeleteModelResponse} DeleteModelResponse instance
         */
        DeleteModelResponse.create = function create(properties) {
            return new DeleteModelResponse(properties);
        };

        /**
         * Encodes the specified DeleteModelResponse message. Does not implicitly {@link model.DeleteModelResponse.verify|verify} messages.
         * @function encode
         * @memberof model.DeleteModelResponse
         * @static
         * @param {model.IDeleteModelResponse} message DeleteModelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteModelResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified DeleteModelResponse message, length delimited. Does not implicitly {@link model.DeleteModelResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.DeleteModelResponse
         * @static
         * @param {model.IDeleteModelResponse} message DeleteModelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeleteModelResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeleteModelResponse message from the specified reader or buffer.
         * @function decode
         * @memberof model.DeleteModelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.DeleteModelResponse} DeleteModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteModelResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.DeleteModelResponse();
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
         * Decodes a DeleteModelResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.DeleteModelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.DeleteModelResponse} DeleteModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeleteModelResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeleteModelResponse message.
         * @function verify
         * @memberof model.DeleteModelResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeleteModelResponse.verify = function verify(message) {
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
         * Creates a DeleteModelResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.DeleteModelResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.DeleteModelResponse} DeleteModelResponse
         */
        DeleteModelResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.model.DeleteModelResponse)
                return object;
            let message = new $root.model.DeleteModelResponse();
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
         * Creates a plain object from a DeleteModelResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.DeleteModelResponse
         * @static
         * @param {model.DeleteModelResponse} message DeleteModelResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeleteModelResponse.toObject = function toObject(message, options) {
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
         * Converts this DeleteModelResponse to JSON.
         * @function toJSON
         * @memberof model.DeleteModelResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeleteModelResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeleteModelResponse;
    })();

    model.UploadModelCompleteRequest = (function() {

        /**
         * Properties of an UploadModelCompleteRequest.
         * @memberof model
         * @interface IUploadModelCompleteRequest
         * @property {Array.<model.IChunkMeta>|null} [chunks] UploadModelCompleteRequest chunks
         */

        /**
         * Constructs a new UploadModelCompleteRequest.
         * @memberof model
         * @classdesc Represents an UploadModelCompleteRequest.
         * @implements IUploadModelCompleteRequest
         * @constructor
         * @param {model.IUploadModelCompleteRequest=} [properties] Properties to set
         */
        function UploadModelCompleteRequest(properties) {
            this.chunks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadModelCompleteRequest chunks.
         * @member {Array.<model.IChunkMeta>} chunks
         * @memberof model.UploadModelCompleteRequest
         * @instance
         */
        UploadModelCompleteRequest.prototype.chunks = $util.emptyArray;

        /**
         * Creates a new UploadModelCompleteRequest instance using the specified properties.
         * @function create
         * @memberof model.UploadModelCompleteRequest
         * @static
         * @param {model.IUploadModelCompleteRequest=} [properties] Properties to set
         * @returns {model.UploadModelCompleteRequest} UploadModelCompleteRequest instance
         */
        UploadModelCompleteRequest.create = function create(properties) {
            return new UploadModelCompleteRequest(properties);
        };

        /**
         * Encodes the specified UploadModelCompleteRequest message. Does not implicitly {@link model.UploadModelCompleteRequest.verify|verify} messages.
         * @function encode
         * @memberof model.UploadModelCompleteRequest
         * @static
         * @param {model.IUploadModelCompleteRequest} message UploadModelCompleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadModelCompleteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chunks != null && message.chunks.length)
                for (let i = 0; i < message.chunks.length; ++i)
                    $root.model.ChunkMeta.encode(message.chunks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UploadModelCompleteRequest message, length delimited. Does not implicitly {@link model.UploadModelCompleteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.UploadModelCompleteRequest
         * @static
         * @param {model.IUploadModelCompleteRequest} message UploadModelCompleteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadModelCompleteRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadModelCompleteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof model.UploadModelCompleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.UploadModelCompleteRequest} UploadModelCompleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadModelCompleteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.UploadModelCompleteRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chunks && message.chunks.length))
                        message.chunks = [];
                    message.chunks.push($root.model.ChunkMeta.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UploadModelCompleteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.UploadModelCompleteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.UploadModelCompleteRequest} UploadModelCompleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadModelCompleteRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadModelCompleteRequest message.
         * @function verify
         * @memberof model.UploadModelCompleteRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadModelCompleteRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chunks != null && message.hasOwnProperty("chunks")) {
                if (!Array.isArray(message.chunks))
                    return "chunks: array expected";
                for (let i = 0; i < message.chunks.length; ++i) {
                    let error = $root.model.ChunkMeta.verify(message.chunks[i]);
                    if (error)
                        return "chunks." + error;
                }
            }
            return null;
        };

        /**
         * Creates an UploadModelCompleteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.UploadModelCompleteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.UploadModelCompleteRequest} UploadModelCompleteRequest
         */
        UploadModelCompleteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.model.UploadModelCompleteRequest)
                return object;
            let message = new $root.model.UploadModelCompleteRequest();
            if (object.chunks) {
                if (!Array.isArray(object.chunks))
                    throw TypeError(".model.UploadModelCompleteRequest.chunks: array expected");
                message.chunks = [];
                for (let i = 0; i < object.chunks.length; ++i) {
                    if (typeof object.chunks[i] !== "object")
                        throw TypeError(".model.UploadModelCompleteRequest.chunks: object expected");
                    message.chunks[i] = $root.model.ChunkMeta.fromObject(object.chunks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an UploadModelCompleteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.UploadModelCompleteRequest
         * @static
         * @param {model.UploadModelCompleteRequest} message UploadModelCompleteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadModelCompleteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.chunks = [];
            if (message.chunks && message.chunks.length) {
                object.chunks = [];
                for (let j = 0; j < message.chunks.length; ++j)
                    object.chunks[j] = $root.model.ChunkMeta.toObject(message.chunks[j], options);
            }
            return object;
        };

        /**
         * Converts this UploadModelCompleteRequest to JSON.
         * @function toJSON
         * @memberof model.UploadModelCompleteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadModelCompleteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UploadModelCompleteRequest;
    })();

    model.UploadModelCompleteResponse = (function() {

        /**
         * Properties of an UploadModelCompleteResponse.
         * @memberof model
         * @interface IUploadModelCompleteResponse
         * @property {common.Error|null} [error] UploadModelCompleteResponse error
         */

        /**
         * Constructs a new UploadModelCompleteResponse.
         * @memberof model
         * @classdesc Represents an UploadModelCompleteResponse.
         * @implements IUploadModelCompleteResponse
         * @constructor
         * @param {model.IUploadModelCompleteResponse=} [properties] Properties to set
         */
        function UploadModelCompleteResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UploadModelCompleteResponse error.
         * @member {common.Error} error
         * @memberof model.UploadModelCompleteResponse
         * @instance
         */
        UploadModelCompleteResponse.prototype.error = 0;

        /**
         * Creates a new UploadModelCompleteResponse instance using the specified properties.
         * @function create
         * @memberof model.UploadModelCompleteResponse
         * @static
         * @param {model.IUploadModelCompleteResponse=} [properties] Properties to set
         * @returns {model.UploadModelCompleteResponse} UploadModelCompleteResponse instance
         */
        UploadModelCompleteResponse.create = function create(properties) {
            return new UploadModelCompleteResponse(properties);
        };

        /**
         * Encodes the specified UploadModelCompleteResponse message. Does not implicitly {@link model.UploadModelCompleteResponse.verify|verify} messages.
         * @function encode
         * @memberof model.UploadModelCompleteResponse
         * @static
         * @param {model.IUploadModelCompleteResponse} message UploadModelCompleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadModelCompleteResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            return writer;
        };

        /**
         * Encodes the specified UploadModelCompleteResponse message, length delimited. Does not implicitly {@link model.UploadModelCompleteResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.UploadModelCompleteResponse
         * @static
         * @param {model.IUploadModelCompleteResponse} message UploadModelCompleteResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UploadModelCompleteResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UploadModelCompleteResponse message from the specified reader or buffer.
         * @function decode
         * @memberof model.UploadModelCompleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.UploadModelCompleteResponse} UploadModelCompleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadModelCompleteResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.UploadModelCompleteResponse();
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
         * Decodes an UploadModelCompleteResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.UploadModelCompleteResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.UploadModelCompleteResponse} UploadModelCompleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UploadModelCompleteResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UploadModelCompleteResponse message.
         * @function verify
         * @memberof model.UploadModelCompleteResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UploadModelCompleteResponse.verify = function verify(message) {
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
         * Creates an UploadModelCompleteResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.UploadModelCompleteResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.UploadModelCompleteResponse} UploadModelCompleteResponse
         */
        UploadModelCompleteResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.model.UploadModelCompleteResponse)
                return object;
            let message = new $root.model.UploadModelCompleteResponse();
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
         * Creates a plain object from an UploadModelCompleteResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.UploadModelCompleteResponse
         * @static
         * @param {model.UploadModelCompleteResponse} message UploadModelCompleteResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UploadModelCompleteResponse.toObject = function toObject(message, options) {
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
         * Converts this UploadModelCompleteResponse to JSON.
         * @function toJSON
         * @memberof model.UploadModelCompleteResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UploadModelCompleteResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UploadModelCompleteResponse;
    })();

    model.DownloadModelRequest = (function() {

        /**
         * Properties of a DownloadModelRequest.
         * @memberof model
         * @interface IDownloadModelRequest
         * @property {string|null} [id] DownloadModelRequest id
         */

        /**
         * Constructs a new DownloadModelRequest.
         * @memberof model
         * @classdesc Represents a DownloadModelRequest.
         * @implements IDownloadModelRequest
         * @constructor
         * @param {model.IDownloadModelRequest=} [properties] Properties to set
         */
        function DownloadModelRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DownloadModelRequest id.
         * @member {string} id
         * @memberof model.DownloadModelRequest
         * @instance
         */
        DownloadModelRequest.prototype.id = "";

        /**
         * Creates a new DownloadModelRequest instance using the specified properties.
         * @function create
         * @memberof model.DownloadModelRequest
         * @static
         * @param {model.IDownloadModelRequest=} [properties] Properties to set
         * @returns {model.DownloadModelRequest} DownloadModelRequest instance
         */
        DownloadModelRequest.create = function create(properties) {
            return new DownloadModelRequest(properties);
        };

        /**
         * Encodes the specified DownloadModelRequest message. Does not implicitly {@link model.DownloadModelRequest.verify|verify} messages.
         * @function encode
         * @memberof model.DownloadModelRequest
         * @static
         * @param {model.IDownloadModelRequest} message DownloadModelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownloadModelRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified DownloadModelRequest message, length delimited. Does not implicitly {@link model.DownloadModelRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.DownloadModelRequest
         * @static
         * @param {model.IDownloadModelRequest} message DownloadModelRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownloadModelRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DownloadModelRequest message from the specified reader or buffer.
         * @function decode
         * @memberof model.DownloadModelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.DownloadModelRequest} DownloadModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownloadModelRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.DownloadModelRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DownloadModelRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.DownloadModelRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.DownloadModelRequest} DownloadModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownloadModelRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DownloadModelRequest message.
         * @function verify
         * @memberof model.DownloadModelRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DownloadModelRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a DownloadModelRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.DownloadModelRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.DownloadModelRequest} DownloadModelRequest
         */
        DownloadModelRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.model.DownloadModelRequest)
                return object;
            let message = new $root.model.DownloadModelRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a DownloadModelRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.DownloadModelRequest
         * @static
         * @param {model.DownloadModelRequest} message DownloadModelRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DownloadModelRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this DownloadModelRequest to JSON.
         * @function toJSON
         * @memberof model.DownloadModelRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DownloadModelRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DownloadModelRequest;
    })();

    model.DownloadModelResponse = (function() {

        /**
         * Properties of a DownloadModelResponse.
         * @memberof model
         * @interface IDownloadModelResponse
         * @property {common.Error|null} [error] DownloadModelResponse error
         * @property {string|null} [url] DownloadModelResponse url
         */

        /**
         * Constructs a new DownloadModelResponse.
         * @memberof model
         * @classdesc Represents a DownloadModelResponse.
         * @implements IDownloadModelResponse
         * @constructor
         * @param {model.IDownloadModelResponse=} [properties] Properties to set
         */
        function DownloadModelResponse(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DownloadModelResponse error.
         * @member {common.Error} error
         * @memberof model.DownloadModelResponse
         * @instance
         */
        DownloadModelResponse.prototype.error = 0;

        /**
         * DownloadModelResponse url.
         * @member {string} url
         * @memberof model.DownloadModelResponse
         * @instance
         */
        DownloadModelResponse.prototype.url = "";

        /**
         * Creates a new DownloadModelResponse instance using the specified properties.
         * @function create
         * @memberof model.DownloadModelResponse
         * @static
         * @param {model.IDownloadModelResponse=} [properties] Properties to set
         * @returns {model.DownloadModelResponse} DownloadModelResponse instance
         */
        DownloadModelResponse.create = function create(properties) {
            return new DownloadModelResponse(properties);
        };

        /**
         * Encodes the specified DownloadModelResponse message. Does not implicitly {@link model.DownloadModelResponse.verify|verify} messages.
         * @function encode
         * @memberof model.DownloadModelResponse
         * @static
         * @param {model.IDownloadModelResponse} message DownloadModelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownloadModelResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error != null && message.hasOwnProperty("error"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error);
            if (message.url != null && message.hasOwnProperty("url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        };

        /**
         * Encodes the specified DownloadModelResponse message, length delimited. Does not implicitly {@link model.DownloadModelResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.DownloadModelResponse
         * @static
         * @param {model.IDownloadModelResponse} message DownloadModelResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DownloadModelResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DownloadModelResponse message from the specified reader or buffer.
         * @function decode
         * @memberof model.DownloadModelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.DownloadModelResponse} DownloadModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownloadModelResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.DownloadModelResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error = reader.int32();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DownloadModelResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.DownloadModelResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.DownloadModelResponse} DownloadModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DownloadModelResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DownloadModelResponse message.
         * @function verify
         * @memberof model.DownloadModelResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DownloadModelResponse.verify = function verify(message) {
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
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        };

        /**
         * Creates a DownloadModelResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.DownloadModelResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.DownloadModelResponse} DownloadModelResponse
         */
        DownloadModelResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.model.DownloadModelResponse)
                return object;
            let message = new $root.model.DownloadModelResponse();
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
            if (object.url != null)
                message.url = String(object.url);
            return message;
        };

        /**
         * Creates a plain object from a DownloadModelResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.DownloadModelResponse
         * @static
         * @param {model.DownloadModelResponse} message DownloadModelResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DownloadModelResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.error = options.enums === String ? "NO_ERROR" : 0;
                object.url = "";
            }
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.common.Error[message.error] : message.error;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        };

        /**
         * Converts this DownloadModelResponse to JSON.
         * @function toJSON
         * @memberof model.DownloadModelResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DownloadModelResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DownloadModelResponse;
    })();

    model.ChunkMeta = (function() {

        /**
         * Properties of a ChunkMeta.
         * @memberof model
         * @interface IChunkMeta
         * @property {string|null} [md5] ChunkMeta md5
         * @property {string|null} [index] ChunkMeta index
         */

        /**
         * Constructs a new ChunkMeta.
         * @memberof model
         * @classdesc Represents a ChunkMeta.
         * @implements IChunkMeta
         * @constructor
         * @param {model.IChunkMeta=} [properties] Properties to set
         */
        function ChunkMeta(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChunkMeta md5.
         * @member {string} md5
         * @memberof model.ChunkMeta
         * @instance
         */
        ChunkMeta.prototype.md5 = "";

        /**
         * ChunkMeta index.
         * @member {string} index
         * @memberof model.ChunkMeta
         * @instance
         */
        ChunkMeta.prototype.index = "";

        /**
         * Creates a new ChunkMeta instance using the specified properties.
         * @function create
         * @memberof model.ChunkMeta
         * @static
         * @param {model.IChunkMeta=} [properties] Properties to set
         * @returns {model.ChunkMeta} ChunkMeta instance
         */
        ChunkMeta.create = function create(properties) {
            return new ChunkMeta(properties);
        };

        /**
         * Encodes the specified ChunkMeta message. Does not implicitly {@link model.ChunkMeta.verify|verify} messages.
         * @function encode
         * @memberof model.ChunkMeta
         * @static
         * @param {model.IChunkMeta} message ChunkMeta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkMeta.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.md5 != null && message.hasOwnProperty("md5"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.md5);
            if (message.index != null && message.hasOwnProperty("index"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.index);
            return writer;
        };

        /**
         * Encodes the specified ChunkMeta message, length delimited. Does not implicitly {@link model.ChunkMeta.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.ChunkMeta
         * @static
         * @param {model.IChunkMeta} message ChunkMeta message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChunkMeta.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChunkMeta message from the specified reader or buffer.
         * @function decode
         * @memberof model.ChunkMeta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.ChunkMeta} ChunkMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkMeta.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.ChunkMeta();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.md5 = reader.string();
                    break;
                case 2:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChunkMeta message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.ChunkMeta
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.ChunkMeta} ChunkMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChunkMeta.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChunkMeta message.
         * @function verify
         * @memberof model.ChunkMeta
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChunkMeta.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.md5 != null && message.hasOwnProperty("md5"))
                if (!$util.isString(message.md5))
                    return "md5: string expected";
            if (message.index != null && message.hasOwnProperty("index"))
                if (!$util.isString(message.index))
                    return "index: string expected";
            return null;
        };

        /**
         * Creates a ChunkMeta message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.ChunkMeta
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.ChunkMeta} ChunkMeta
         */
        ChunkMeta.fromObject = function fromObject(object) {
            if (object instanceof $root.model.ChunkMeta)
                return object;
            let message = new $root.model.ChunkMeta();
            if (object.md5 != null)
                message.md5 = String(object.md5);
            if (object.index != null)
                message.index = String(object.index);
            return message;
        };

        /**
         * Creates a plain object from a ChunkMeta message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.ChunkMeta
         * @static
         * @param {model.ChunkMeta} message ChunkMeta
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChunkMeta.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.md5 = "";
                object.index = "";
            }
            if (message.md5 != null && message.hasOwnProperty("md5"))
                object.md5 = message.md5;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };

        /**
         * Converts this ChunkMeta to JSON.
         * @function toJSON
         * @memberof model.ChunkMeta
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChunkMeta.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChunkMeta;
    })();

    /**
     * ModelStatus enum.
     * @name model.ModelStatus
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} CREATED=1 CREATED value
     * @property {number} PROCESSING=2 PROCESSING value
     * @property {number} SUCCESS=3 SUCCESS value
     * @property {number} FAILED=4 FAILED value
     */
    model.ModelStatus = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "CREATED"] = 1;
        values[valuesById[2] = "PROCESSING"] = 2;
        values[valuesById[3] = "SUCCESS"] = 3;
        values[valuesById[4] = "FAILED"] = 4;
        return values;
    })();

    model.Model = (function() {

        /**
         * Properties of a Model.
         * @memberof model
         * @interface IModel
         * @property {number|Long|null} [id] Model id
         * @property {string|null} [name] Model name
         * @property {string|null} [version] Model version
         * @property {string|null} [description] Model description
         * @property {string|null} [file_type] Model file_type
         * @property {common.IUser|null} [user] Model user
         * @property {model.ModelStatus|null} [status] Model status
         */

        /**
         * Constructs a new Model.
         * @memberof model
         * @classdesc Represents a Model.
         * @implements IModel
         * @constructor
         * @param {model.IModel=} [properties] Properties to set
         */
        function Model(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Model id.
         * @member {number|Long} id
         * @memberof model.Model
         * @instance
         */
        Model.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Model name.
         * @member {string} name
         * @memberof model.Model
         * @instance
         */
        Model.prototype.name = "";

        /**
         * Model version.
         * @member {string} version
         * @memberof model.Model
         * @instance
         */
        Model.prototype.version = "";

        /**
         * Model description.
         * @member {string} description
         * @memberof model.Model
         * @instance
         */
        Model.prototype.description = "";

        /**
         * Model file_type.
         * @member {string} file_type
         * @memberof model.Model
         * @instance
         */
        Model.prototype.file_type = "";

        /**
         * Model user.
         * @member {common.IUser|null|undefined} user
         * @memberof model.Model
         * @instance
         */
        Model.prototype.user = null;

        /**
         * Model status.
         * @member {model.ModelStatus} status
         * @memberof model.Model
         * @instance
         */
        Model.prototype.status = 0;

        /**
         * Creates a new Model instance using the specified properties.
         * @function create
         * @memberof model.Model
         * @static
         * @param {model.IModel=} [properties] Properties to set
         * @returns {model.Model} Model instance
         */
        Model.create = function create(properties) {
            return new Model(properties);
        };

        /**
         * Encodes the specified Model message. Does not implicitly {@link model.Model.verify|verify} messages.
         * @function encode
         * @memberof model.Model
         * @static
         * @param {model.IModel} message Model message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Model.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.file_type);
            if (message.user != null && message.hasOwnProperty("user"))
                $root.common.User.encode(message.user, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified Model message, length delimited. Does not implicitly {@link model.Model.verify|verify} messages.
         * @function encodeDelimited
         * @memberof model.Model
         * @static
         * @param {model.IModel} message Model message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Model.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Model message from the specified reader or buffer.
         * @function decode
         * @memberof model.Model
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {model.Model} Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Model.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.model.Model();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.file_type = reader.string();
                    break;
                case 6:
                    message.user = $root.common.User.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Model message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof model.Model
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {model.Model} Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Model.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Model message.
         * @function verify
         * @memberof model.Model
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Model.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                if (!$util.isString(message.file_type))
                    return "file_type: string expected";
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.common.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates a Model message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof model.Model
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {model.Model} Model
         */
        Model.fromObject = function fromObject(object) {
            if (object instanceof $root.model.Model)
                return object;
            let message = new $root.model.Model();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.version != null)
                message.version = String(object.version);
            if (object.description != null)
                message.description = String(object.description);
            if (object.file_type != null)
                message.file_type = String(object.file_type);
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".model.Model.user: object expected");
                message.user = $root.common.User.fromObject(object.user);
            }
            switch (object.status) {
            case "UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "CREATED":
            case 1:
                message.status = 1;
                break;
            case "PROCESSING":
            case 2:
                message.status = 2;
                break;
            case "SUCCESS":
            case 3:
                message.status = 3;
                break;
            case "FAILED":
            case 4:
                message.status = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Model message. Also converts values to other types if specified.
         * @function toObject
         * @memberof model.Model
         * @static
         * @param {model.Model} message Model
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Model.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.name = "";
                object.version = "";
                object.description = "";
                object.file_type = "";
                object.user = null;
                object.status = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.file_type != null && message.hasOwnProperty("file_type"))
                object.file_type = message.file_type;
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.common.User.toObject(message.user, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.model.ModelStatus[message.status] : message.status;
            return object;
        };

        /**
         * Converts this Model to JSON.
         * @function toJSON
         * @memberof model.Model
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Model.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Model;
    })();

    return model;
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
