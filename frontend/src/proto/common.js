/*eslint-disable default-case, block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
