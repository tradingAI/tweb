import * as $protobuf from "protobufjs";
/** Namespace model. */
export namespace model {

    /** Properties of a FetchModelRequest. */
    interface IFetchModelRequest {
    }

    /** Represents a FetchModelRequest. */
    class FetchModelRequest implements IFetchModelRequest {

        /**
         * Constructs a new FetchModelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IFetchModelRequest);

        /**
         * Creates a new FetchModelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchModelRequest instance
         */
        public static create(properties?: model.IFetchModelRequest): model.FetchModelRequest;

        /**
         * Encodes the specified FetchModelRequest message. Does not implicitly {@link model.FetchModelRequest.verify|verify} messages.
         * @param message FetchModelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IFetchModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchModelRequest message, length delimited. Does not implicitly {@link model.FetchModelRequest.verify|verify} messages.
         * @param message FetchModelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IFetchModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchModelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.FetchModelRequest;

        /**
         * Decodes a FetchModelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FetchModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.FetchModelRequest;

        /**
         * Verifies a FetchModelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchModelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchModelRequest
         */
        public static fromObject(object: { [k: string]: any }): model.FetchModelRequest;

        /**
         * Creates a plain object from a FetchModelRequest message. Also converts values to other types if specified.
         * @param message FetchModelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.FetchModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchModelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FetchModelResponse. */
    interface IFetchModelResponse {

        /** FetchModelResponse error */
        error?: (common.Error|null);

        /** FetchModelResponse models */
        models?: (model.IModel[]|null);
    }

    /** Represents a FetchModelResponse. */
    class FetchModelResponse implements IFetchModelResponse {

        /**
         * Constructs a new FetchModelResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IFetchModelResponse);

        /** FetchModelResponse error. */
        public error: common.Error;

        /** FetchModelResponse models. */
        public models: model.IModel[];

        /**
         * Creates a new FetchModelResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FetchModelResponse instance
         */
        public static create(properties?: model.IFetchModelResponse): model.FetchModelResponse;

        /**
         * Encodes the specified FetchModelResponse message. Does not implicitly {@link model.FetchModelResponse.verify|verify} messages.
         * @param message FetchModelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IFetchModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FetchModelResponse message, length delimited. Does not implicitly {@link model.FetchModelResponse.verify|verify} messages.
         * @param message FetchModelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IFetchModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FetchModelResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FetchModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.FetchModelResponse;

        /**
         * Decodes a FetchModelResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FetchModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.FetchModelResponse;

        /**
         * Verifies a FetchModelResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FetchModelResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FetchModelResponse
         */
        public static fromObject(object: { [k: string]: any }): model.FetchModelResponse;

        /**
         * Creates a plain object from a FetchModelResponse message. Also converts values to other types if specified.
         * @param message FetchModelResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.FetchModelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FetchModelResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateModelRequest. */
    interface ICreateModelRequest {

        /** CreateModelRequest name */
        name?: (string|null);

        /** CreateModelRequest version */
        version?: (string|null);

        /** CreateModelRequest description */
        description?: (string|null);

        /** CreateModelRequest file_type */
        file_type?: (string|null);
    }

    /** Represents a CreateModelRequest. */
    class CreateModelRequest implements ICreateModelRequest {

        /**
         * Constructs a new CreateModelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ICreateModelRequest);

        /** CreateModelRequest name. */
        public name: string;

        /** CreateModelRequest version. */
        public version: string;

        /** CreateModelRequest description. */
        public description: string;

        /** CreateModelRequest file_type. */
        public file_type: string;

        /**
         * Creates a new CreateModelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateModelRequest instance
         */
        public static create(properties?: model.ICreateModelRequest): model.CreateModelRequest;

        /**
         * Encodes the specified CreateModelRequest message. Does not implicitly {@link model.CreateModelRequest.verify|verify} messages.
         * @param message CreateModelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ICreateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateModelRequest message, length delimited. Does not implicitly {@link model.CreateModelRequest.verify|verify} messages.
         * @param message CreateModelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.ICreateModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateModelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.CreateModelRequest;

        /**
         * Decodes a CreateModelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.CreateModelRequest;

        /**
         * Verifies a CreateModelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateModelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateModelRequest
         */
        public static fromObject(object: { [k: string]: any }): model.CreateModelRequest;

        /**
         * Creates a plain object from a CreateModelRequest message. Also converts values to other types if specified.
         * @param message CreateModelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.CreateModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateModelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateModelResponse. */
    interface ICreateModelResponse {

        /** CreateModelResponse error */
        error?: (common.Error|null);

        /** CreateModelResponse id */
        id?: (string|null);
    }

    /** Represents a CreateModelResponse. */
    class CreateModelResponse implements ICreateModelResponse {

        /**
         * Constructs a new CreateModelResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.ICreateModelResponse);

        /** CreateModelResponse error. */
        public error: common.Error;

        /** CreateModelResponse id. */
        public id: string;

        /**
         * Creates a new CreateModelResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateModelResponse instance
         */
        public static create(properties?: model.ICreateModelResponse): model.CreateModelResponse;

        /**
         * Encodes the specified CreateModelResponse message. Does not implicitly {@link model.CreateModelResponse.verify|verify} messages.
         * @param message CreateModelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.ICreateModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateModelResponse message, length delimited. Does not implicitly {@link model.CreateModelResponse.verify|verify} messages.
         * @param message CreateModelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.ICreateModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateModelResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.CreateModelResponse;

        /**
         * Decodes a CreateModelResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.CreateModelResponse;

        /**
         * Verifies a CreateModelResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateModelResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateModelResponse
         */
        public static fromObject(object: { [k: string]: any }): model.CreateModelResponse;

        /**
         * Creates a plain object from a CreateModelResponse message. Also converts values to other types if specified.
         * @param message CreateModelResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.CreateModelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateModelResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteModelRequest. */
    interface IDeleteModelRequest {

        /** DeleteModelRequest id */
        id?: (string|null);
    }

    /** Represents a DeleteModelRequest. */
    class DeleteModelRequest implements IDeleteModelRequest {

        /**
         * Constructs a new DeleteModelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IDeleteModelRequest);

        /** DeleteModelRequest id. */
        public id: string;

        /**
         * Creates a new DeleteModelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteModelRequest instance
         */
        public static create(properties?: model.IDeleteModelRequest): model.DeleteModelRequest;

        /**
         * Encodes the specified DeleteModelRequest message. Does not implicitly {@link model.DeleteModelRequest.verify|verify} messages.
         * @param message DeleteModelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IDeleteModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteModelRequest message, length delimited. Does not implicitly {@link model.DeleteModelRequest.verify|verify} messages.
         * @param message DeleteModelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IDeleteModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteModelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.DeleteModelRequest;

        /**
         * Decodes a DeleteModelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.DeleteModelRequest;

        /**
         * Verifies a DeleteModelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteModelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteModelRequest
         */
        public static fromObject(object: { [k: string]: any }): model.DeleteModelRequest;

        /**
         * Creates a plain object from a DeleteModelRequest message. Also converts values to other types if specified.
         * @param message DeleteModelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.DeleteModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteModelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteModelResponse. */
    interface IDeleteModelResponse {

        /** DeleteModelResponse error */
        error?: (common.Error|null);
    }

    /** Represents a DeleteModelResponse. */
    class DeleteModelResponse implements IDeleteModelResponse {

        /**
         * Constructs a new DeleteModelResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IDeleteModelResponse);

        /** DeleteModelResponse error. */
        public error: common.Error;

        /**
         * Creates a new DeleteModelResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteModelResponse instance
         */
        public static create(properties?: model.IDeleteModelResponse): model.DeleteModelResponse;

        /**
         * Encodes the specified DeleteModelResponse message. Does not implicitly {@link model.DeleteModelResponse.verify|verify} messages.
         * @param message DeleteModelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IDeleteModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteModelResponse message, length delimited. Does not implicitly {@link model.DeleteModelResponse.verify|verify} messages.
         * @param message DeleteModelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IDeleteModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteModelResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.DeleteModelResponse;

        /**
         * Decodes a DeleteModelResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.DeleteModelResponse;

        /**
         * Verifies a DeleteModelResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteModelResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteModelResponse
         */
        public static fromObject(object: { [k: string]: any }): model.DeleteModelResponse;

        /**
         * Creates a plain object from a DeleteModelResponse message. Also converts values to other types if specified.
         * @param message DeleteModelResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.DeleteModelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteModelResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UploadModelCompleteRequest. */
    interface IUploadModelCompleteRequest {

        /** UploadModelCompleteRequest chunks */
        chunks?: (model.IChunkMeta[]|null);
    }

    /** Represents an UploadModelCompleteRequest. */
    class UploadModelCompleteRequest implements IUploadModelCompleteRequest {

        /**
         * Constructs a new UploadModelCompleteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IUploadModelCompleteRequest);

        /** UploadModelCompleteRequest chunks. */
        public chunks: model.IChunkMeta[];

        /**
         * Creates a new UploadModelCompleteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadModelCompleteRequest instance
         */
        public static create(properties?: model.IUploadModelCompleteRequest): model.UploadModelCompleteRequest;

        /**
         * Encodes the specified UploadModelCompleteRequest message. Does not implicitly {@link model.UploadModelCompleteRequest.verify|verify} messages.
         * @param message UploadModelCompleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IUploadModelCompleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadModelCompleteRequest message, length delimited. Does not implicitly {@link model.UploadModelCompleteRequest.verify|verify} messages.
         * @param message UploadModelCompleteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IUploadModelCompleteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadModelCompleteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadModelCompleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.UploadModelCompleteRequest;

        /**
         * Decodes an UploadModelCompleteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadModelCompleteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.UploadModelCompleteRequest;

        /**
         * Verifies an UploadModelCompleteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadModelCompleteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadModelCompleteRequest
         */
        public static fromObject(object: { [k: string]: any }): model.UploadModelCompleteRequest;

        /**
         * Creates a plain object from an UploadModelCompleteRequest message. Also converts values to other types if specified.
         * @param message UploadModelCompleteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.UploadModelCompleteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadModelCompleteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UploadModelCompleteResponse. */
    interface IUploadModelCompleteResponse {

        /** UploadModelCompleteResponse error */
        error?: (common.Error|null);
    }

    /** Represents an UploadModelCompleteResponse. */
    class UploadModelCompleteResponse implements IUploadModelCompleteResponse {

        /**
         * Constructs a new UploadModelCompleteResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IUploadModelCompleteResponse);

        /** UploadModelCompleteResponse error. */
        public error: common.Error;

        /**
         * Creates a new UploadModelCompleteResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadModelCompleteResponse instance
         */
        public static create(properties?: model.IUploadModelCompleteResponse): model.UploadModelCompleteResponse;

        /**
         * Encodes the specified UploadModelCompleteResponse message. Does not implicitly {@link model.UploadModelCompleteResponse.verify|verify} messages.
         * @param message UploadModelCompleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IUploadModelCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadModelCompleteResponse message, length delimited. Does not implicitly {@link model.UploadModelCompleteResponse.verify|verify} messages.
         * @param message UploadModelCompleteResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IUploadModelCompleteResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadModelCompleteResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadModelCompleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.UploadModelCompleteResponse;

        /**
         * Decodes an UploadModelCompleteResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadModelCompleteResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.UploadModelCompleteResponse;

        /**
         * Verifies an UploadModelCompleteResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadModelCompleteResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadModelCompleteResponse
         */
        public static fromObject(object: { [k: string]: any }): model.UploadModelCompleteResponse;

        /**
         * Creates a plain object from an UploadModelCompleteResponse message. Also converts values to other types if specified.
         * @param message UploadModelCompleteResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.UploadModelCompleteResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadModelCompleteResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DownloadModelRequest. */
    interface IDownloadModelRequest {

        /** DownloadModelRequest id */
        id?: (string|null);
    }

    /** Represents a DownloadModelRequest. */
    class DownloadModelRequest implements IDownloadModelRequest {

        /**
         * Constructs a new DownloadModelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IDownloadModelRequest);

        /** DownloadModelRequest id. */
        public id: string;

        /**
         * Creates a new DownloadModelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DownloadModelRequest instance
         */
        public static create(properties?: model.IDownloadModelRequest): model.DownloadModelRequest;

        /**
         * Encodes the specified DownloadModelRequest message. Does not implicitly {@link model.DownloadModelRequest.verify|verify} messages.
         * @param message DownloadModelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IDownloadModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DownloadModelRequest message, length delimited. Does not implicitly {@link model.DownloadModelRequest.verify|verify} messages.
         * @param message DownloadModelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IDownloadModelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DownloadModelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DownloadModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.DownloadModelRequest;

        /**
         * Decodes a DownloadModelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DownloadModelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.DownloadModelRequest;

        /**
         * Verifies a DownloadModelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DownloadModelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DownloadModelRequest
         */
        public static fromObject(object: { [k: string]: any }): model.DownloadModelRequest;

        /**
         * Creates a plain object from a DownloadModelRequest message. Also converts values to other types if specified.
         * @param message DownloadModelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.DownloadModelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DownloadModelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DownloadModelResponse. */
    interface IDownloadModelResponse {

        /** DownloadModelResponse error */
        error?: (common.Error|null);

        /** DownloadModelResponse url */
        url?: (string|null);
    }

    /** Represents a DownloadModelResponse. */
    class DownloadModelResponse implements IDownloadModelResponse {

        /**
         * Constructs a new DownloadModelResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IDownloadModelResponse);

        /** DownloadModelResponse error. */
        public error: common.Error;

        /** DownloadModelResponse url. */
        public url: string;

        /**
         * Creates a new DownloadModelResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DownloadModelResponse instance
         */
        public static create(properties?: model.IDownloadModelResponse): model.DownloadModelResponse;

        /**
         * Encodes the specified DownloadModelResponse message. Does not implicitly {@link model.DownloadModelResponse.verify|verify} messages.
         * @param message DownloadModelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IDownloadModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DownloadModelResponse message, length delimited. Does not implicitly {@link model.DownloadModelResponse.verify|verify} messages.
         * @param message DownloadModelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IDownloadModelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DownloadModelResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DownloadModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.DownloadModelResponse;

        /**
         * Decodes a DownloadModelResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DownloadModelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.DownloadModelResponse;

        /**
         * Verifies a DownloadModelResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DownloadModelResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DownloadModelResponse
         */
        public static fromObject(object: { [k: string]: any }): model.DownloadModelResponse;

        /**
         * Creates a plain object from a DownloadModelResponse message. Also converts values to other types if specified.
         * @param message DownloadModelResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.DownloadModelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DownloadModelResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChunkMeta. */
    interface IChunkMeta {

        /** ChunkMeta md5 */
        md5?: (string|null);

        /** ChunkMeta index */
        index?: (string|null);
    }

    /** Represents a ChunkMeta. */
    class ChunkMeta implements IChunkMeta {

        /**
         * Constructs a new ChunkMeta.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IChunkMeta);

        /** ChunkMeta md5. */
        public md5: string;

        /** ChunkMeta index. */
        public index: string;

        /**
         * Creates a new ChunkMeta instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChunkMeta instance
         */
        public static create(properties?: model.IChunkMeta): model.ChunkMeta;

        /**
         * Encodes the specified ChunkMeta message. Does not implicitly {@link model.ChunkMeta.verify|verify} messages.
         * @param message ChunkMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IChunkMeta, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChunkMeta message, length delimited. Does not implicitly {@link model.ChunkMeta.verify|verify} messages.
         * @param message ChunkMeta message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IChunkMeta, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChunkMeta message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChunkMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.ChunkMeta;

        /**
         * Decodes a ChunkMeta message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChunkMeta
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.ChunkMeta;

        /**
         * Verifies a ChunkMeta message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChunkMeta message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChunkMeta
         */
        public static fromObject(object: { [k: string]: any }): model.ChunkMeta;

        /**
         * Creates a plain object from a ChunkMeta message. Also converts values to other types if specified.
         * @param message ChunkMeta
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.ChunkMeta, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChunkMeta to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ModelStatus enum. */
    enum ModelStatus {
        UNKNOWN = 0,
        CREATED = 1,
        PROCESSING = 2,
        SUCCESS = 3,
        FAILED = 4
    }

    /** Properties of a Model. */
    interface IModel {

        /** Model id */
        id?: (number|Long|null);

        /** Model name */
        name?: (string|null);

        /** Model version */
        version?: (string|null);

        /** Model description */
        description?: (string|null);

        /** Model file_type */
        file_type?: (string|null);

        /** Model user */
        user?: (common.IUser|null);

        /** Model status */
        status?: (model.ModelStatus|null);
    }

    /** Represents a Model. */
    class Model implements IModel {

        /**
         * Constructs a new Model.
         * @param [properties] Properties to set
         */
        constructor(properties?: model.IModel);

        /** Model id. */
        public id: (number|Long);

        /** Model name. */
        public name: string;

        /** Model version. */
        public version: string;

        /** Model description. */
        public description: string;

        /** Model file_type. */
        public file_type: string;

        /** Model user. */
        public user?: (common.IUser|null);

        /** Model status. */
        public status: model.ModelStatus;

        /**
         * Creates a new Model instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Model instance
         */
        public static create(properties?: model.IModel): model.Model;

        /**
         * Encodes the specified Model message. Does not implicitly {@link model.Model.verify|verify} messages.
         * @param message Model message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: model.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Model message, length delimited. Does not implicitly {@link model.Model.verify|verify} messages.
         * @param message Model message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: model.IModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Model message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): model.Model;

        /**
         * Decodes a Model message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): model.Model;

        /**
         * Verifies a Model message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Model message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Model
         */
        public static fromObject(object: { [k: string]: any }): model.Model;

        /**
         * Creates a plain object from a Model message. Also converts values to other types if specified.
         * @param message Model
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: model.Model, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Model to JSON.
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
