// Code generated by protoc-gen-go. DO NOT EDIT.
// source: model.proto

package proto

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type FetchModelRequest struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *FetchModelRequest) Reset()         { *m = FetchModelRequest{} }
func (m *FetchModelRequest) String() string { return proto.CompactTextString(m) }
func (*FetchModelRequest) ProtoMessage()    {}
func (*FetchModelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{0}
}

func (m *FetchModelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FetchModelRequest.Unmarshal(m, b)
}
func (m *FetchModelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FetchModelRequest.Marshal(b, m, deterministic)
}
func (m *FetchModelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FetchModelRequest.Merge(m, src)
}
func (m *FetchModelRequest) XXX_Size() int {
	return xxx_messageInfo_FetchModelRequest.Size(m)
}
func (m *FetchModelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_FetchModelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_FetchModelRequest proto.InternalMessageInfo

type FetchModelResponse struct {
	Error                Error    `protobuf:"varint,1,opt,name=error,proto3,enum=common.Error" json:"error,omitempty"`
	Models               []*Model `protobuf:"bytes,2,rep,name=models,proto3" json:"models,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *FetchModelResponse) Reset()         { *m = FetchModelResponse{} }
func (m *FetchModelResponse) String() string { return proto.CompactTextString(m) }
func (*FetchModelResponse) ProtoMessage()    {}
func (*FetchModelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{1}
}

func (m *FetchModelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FetchModelResponse.Unmarshal(m, b)
}
func (m *FetchModelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FetchModelResponse.Marshal(b, m, deterministic)
}
func (m *FetchModelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FetchModelResponse.Merge(m, src)
}
func (m *FetchModelResponse) XXX_Size() int {
	return xxx_messageInfo_FetchModelResponse.Size(m)
}
func (m *FetchModelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_FetchModelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_FetchModelResponse proto.InternalMessageInfo

func (m *FetchModelResponse) GetError() Error {
	if m != nil {
		return m.Error
	}
	return Error_NO_ERROR
}

func (m *FetchModelResponse) GetModels() []*Model {
	if m != nil {
		return m.Models
	}
	return nil
}

type CreateModelRequest struct {
	Name                 string   `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Version              string   `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
	Description          string   `protobuf:"bytes,3,opt,name=description,proto3" json:"description,omitempty"`
	FileType             string   `protobuf:"bytes,4,opt,name=file_type,json=fileType,proto3" json:"file_type,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateModelRequest) Reset()         { *m = CreateModelRequest{} }
func (m *CreateModelRequest) String() string { return proto.CompactTextString(m) }
func (*CreateModelRequest) ProtoMessage()    {}
func (*CreateModelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{2}
}

func (m *CreateModelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateModelRequest.Unmarshal(m, b)
}
func (m *CreateModelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateModelRequest.Marshal(b, m, deterministic)
}
func (m *CreateModelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateModelRequest.Merge(m, src)
}
func (m *CreateModelRequest) XXX_Size() int {
	return xxx_messageInfo_CreateModelRequest.Size(m)
}
func (m *CreateModelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateModelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateModelRequest proto.InternalMessageInfo

func (m *CreateModelRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateModelRequest) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func (m *CreateModelRequest) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *CreateModelRequest) GetFileType() string {
	if m != nil {
		return m.FileType
	}
	return ""
}

type CreateModelResponse struct {
	Error                Error    `protobuf:"varint,1,opt,name=error,proto3,enum=common.Error" json:"error,omitempty"`
	Id                   string   `protobuf:"bytes,2,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateModelResponse) Reset()         { *m = CreateModelResponse{} }
func (m *CreateModelResponse) String() string { return proto.CompactTextString(m) }
func (*CreateModelResponse) ProtoMessage()    {}
func (*CreateModelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{3}
}

func (m *CreateModelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateModelResponse.Unmarshal(m, b)
}
func (m *CreateModelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateModelResponse.Marshal(b, m, deterministic)
}
func (m *CreateModelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateModelResponse.Merge(m, src)
}
func (m *CreateModelResponse) XXX_Size() int {
	return xxx_messageInfo_CreateModelResponse.Size(m)
}
func (m *CreateModelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateModelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateModelResponse proto.InternalMessageInfo

func (m *CreateModelResponse) GetError() Error {
	if m != nil {
		return m.Error
	}
	return Error_NO_ERROR
}

func (m *CreateModelResponse) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type DeleteModelRequest struct {
	Id                   string   `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteModelRequest) Reset()         { *m = DeleteModelRequest{} }
func (m *DeleteModelRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteModelRequest) ProtoMessage()    {}
func (*DeleteModelRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{4}
}

func (m *DeleteModelRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteModelRequest.Unmarshal(m, b)
}
func (m *DeleteModelRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteModelRequest.Marshal(b, m, deterministic)
}
func (m *DeleteModelRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteModelRequest.Merge(m, src)
}
func (m *DeleteModelRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteModelRequest.Size(m)
}
func (m *DeleteModelRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteModelRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteModelRequest proto.InternalMessageInfo

func (m *DeleteModelRequest) GetId() string {
	if m != nil {
		return m.Id
	}
	return ""
}

type DeleteModelResponse struct {
	Error                Error    `protobuf:"varint,1,opt,name=error,proto3,enum=common.Error" json:"error,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteModelResponse) Reset()         { *m = DeleteModelResponse{} }
func (m *DeleteModelResponse) String() string { return proto.CompactTextString(m) }
func (*DeleteModelResponse) ProtoMessage()    {}
func (*DeleteModelResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{5}
}

func (m *DeleteModelResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteModelResponse.Unmarshal(m, b)
}
func (m *DeleteModelResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteModelResponse.Marshal(b, m, deterministic)
}
func (m *DeleteModelResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteModelResponse.Merge(m, src)
}
func (m *DeleteModelResponse) XXX_Size() int {
	return xxx_messageInfo_DeleteModelResponse.Size(m)
}
func (m *DeleteModelResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteModelResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteModelResponse proto.InternalMessageInfo

func (m *DeleteModelResponse) GetError() Error {
	if m != nil {
		return m.Error
	}
	return Error_NO_ERROR
}

type UploadModelCompleteRequest struct {
	Chunks               []*ChunkMeta `protobuf:"bytes,1,rep,name=chunks,proto3" json:"chunks,omitempty"`
	XXX_NoUnkeyedLiteral struct{}     `json:"-"`
	XXX_unrecognized     []byte       `json:"-"`
	XXX_sizecache        int32        `json:"-"`
}

func (m *UploadModelCompleteRequest) Reset()         { *m = UploadModelCompleteRequest{} }
func (m *UploadModelCompleteRequest) String() string { return proto.CompactTextString(m) }
func (*UploadModelCompleteRequest) ProtoMessage()    {}
func (*UploadModelCompleteRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{6}
}

func (m *UploadModelCompleteRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UploadModelCompleteRequest.Unmarshal(m, b)
}
func (m *UploadModelCompleteRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UploadModelCompleteRequest.Marshal(b, m, deterministic)
}
func (m *UploadModelCompleteRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UploadModelCompleteRequest.Merge(m, src)
}
func (m *UploadModelCompleteRequest) XXX_Size() int {
	return xxx_messageInfo_UploadModelCompleteRequest.Size(m)
}
func (m *UploadModelCompleteRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UploadModelCompleteRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UploadModelCompleteRequest proto.InternalMessageInfo

func (m *UploadModelCompleteRequest) GetChunks() []*ChunkMeta {
	if m != nil {
		return m.Chunks
	}
	return nil
}

type UploadModelCompleteResponse struct {
	Error                Error    `protobuf:"varint,1,opt,name=error,proto3,enum=common.Error" json:"error,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UploadModelCompleteResponse) Reset()         { *m = UploadModelCompleteResponse{} }
func (m *UploadModelCompleteResponse) String() string { return proto.CompactTextString(m) }
func (*UploadModelCompleteResponse) ProtoMessage()    {}
func (*UploadModelCompleteResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{7}
}

func (m *UploadModelCompleteResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UploadModelCompleteResponse.Unmarshal(m, b)
}
func (m *UploadModelCompleteResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UploadModelCompleteResponse.Marshal(b, m, deterministic)
}
func (m *UploadModelCompleteResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UploadModelCompleteResponse.Merge(m, src)
}
func (m *UploadModelCompleteResponse) XXX_Size() int {
	return xxx_messageInfo_UploadModelCompleteResponse.Size(m)
}
func (m *UploadModelCompleteResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UploadModelCompleteResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UploadModelCompleteResponse proto.InternalMessageInfo

func (m *UploadModelCompleteResponse) GetError() Error {
	if m != nil {
		return m.Error
	}
	return Error_NO_ERROR
}

type ChunkMeta struct {
	Md5                  string   `protobuf:"bytes,1,opt,name=md5,proto3" json:"md5,omitempty"`
	Index                string   `protobuf:"bytes,2,opt,name=index,proto3" json:"index,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ChunkMeta) Reset()         { *m = ChunkMeta{} }
func (m *ChunkMeta) String() string { return proto.CompactTextString(m) }
func (*ChunkMeta) ProtoMessage()    {}
func (*ChunkMeta) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{8}
}

func (m *ChunkMeta) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ChunkMeta.Unmarshal(m, b)
}
func (m *ChunkMeta) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ChunkMeta.Marshal(b, m, deterministic)
}
func (m *ChunkMeta) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ChunkMeta.Merge(m, src)
}
func (m *ChunkMeta) XXX_Size() int {
	return xxx_messageInfo_ChunkMeta.Size(m)
}
func (m *ChunkMeta) XXX_DiscardUnknown() {
	xxx_messageInfo_ChunkMeta.DiscardUnknown(m)
}

var xxx_messageInfo_ChunkMeta proto.InternalMessageInfo

func (m *ChunkMeta) GetMd5() string {
	if m != nil {
		return m.Md5
	}
	return ""
}

func (m *ChunkMeta) GetIndex() string {
	if m != nil {
		return m.Index
	}
	return ""
}

type Model struct {
	Id                   int64    `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Version              string   `protobuf:"bytes,3,opt,name=version,proto3" json:"version,omitempty"`
	Description          string   `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
	FileType             string   `protobuf:"bytes,5,opt,name=file_type,json=fileType,proto3" json:"file_type,omitempty"`
	User                 *User    `protobuf:"bytes,6,opt,name=user,proto3" json:"user,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Model) Reset()         { *m = Model{} }
func (m *Model) String() string { return proto.CompactTextString(m) }
func (*Model) ProtoMessage()    {}
func (*Model) Descriptor() ([]byte, []int) {
	return fileDescriptor_4c16552f9fdb66d8, []int{9}
}

func (m *Model) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Model.Unmarshal(m, b)
}
func (m *Model) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Model.Marshal(b, m, deterministic)
}
func (m *Model) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Model.Merge(m, src)
}
func (m *Model) XXX_Size() int {
	return xxx_messageInfo_Model.Size(m)
}
func (m *Model) XXX_DiscardUnknown() {
	xxx_messageInfo_Model.DiscardUnknown(m)
}

var xxx_messageInfo_Model proto.InternalMessageInfo

func (m *Model) GetId() int64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Model) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Model) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func (m *Model) GetDescription() string {
	if m != nil {
		return m.Description
	}
	return ""
}

func (m *Model) GetFileType() string {
	if m != nil {
		return m.FileType
	}
	return ""
}

func (m *Model) GetUser() *User {
	if m != nil {
		return m.User
	}
	return nil
}

func init() {
	proto.RegisterType((*FetchModelRequest)(nil), "model.FetchModelRequest")
	proto.RegisterType((*FetchModelResponse)(nil), "model.FetchModelResponse")
	proto.RegisterType((*CreateModelRequest)(nil), "model.CreateModelRequest")
	proto.RegisterType((*CreateModelResponse)(nil), "model.CreateModelResponse")
	proto.RegisterType((*DeleteModelRequest)(nil), "model.DeleteModelRequest")
	proto.RegisterType((*DeleteModelResponse)(nil), "model.DeleteModelResponse")
	proto.RegisterType((*UploadModelCompleteRequest)(nil), "model.UploadModelCompleteRequest")
	proto.RegisterType((*UploadModelCompleteResponse)(nil), "model.UploadModelCompleteResponse")
	proto.RegisterType((*ChunkMeta)(nil), "model.ChunkMeta")
	proto.RegisterType((*Model)(nil), "model.Model")
}

func init() { proto.RegisterFile("model.proto", fileDescriptor_4c16552f9fdb66d8) }

var fileDescriptor_4c16552f9fdb66d8 = []byte{
	// 405 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x53, 0x4d, 0x8f, 0xd3, 0x30,
	0x10, 0x55, 0x3e, 0xa1, 0xd3, 0x65, 0xb5, 0xb8, 0x1c, 0xa2, 0xdd, 0x03, 0xc1, 0xec, 0xa1, 0xa7,
	0x56, 0xda, 0x15, 0x17, 0x6e, 0x6c, 0xa1, 0x12, 0x48, 0xbd, 0x44, 0xf4, 0xc2, 0xa5, 0x4a, 0xe3,
	0xa1, 0xb5, 0x48, 0xe2, 0x60, 0x3b, 0x40, 0x8f, 0xfc, 0x19, 0x7e, 0x27, 0xb2, 0xe3, 0x56, 0x29,
	0xaa, 0x58, 0xf5, 0x14, 0xfb, 0xbd, 0xc9, 0xbc, 0x99, 0xf7, 0x12, 0x18, 0x56, 0x82, 0x61, 0x39,
	0x69, 0xa4, 0xd0, 0x82, 0x44, 0xf6, 0x72, 0x7d, 0x51, 0x88, 0xaa, 0x12, 0x75, 0x07, 0xd2, 0x11,
	0x3c, 0x9f, 0xa3, 0x2e, 0xb6, 0x0b, 0xc3, 0x65, 0xf8, 0xbd, 0x45, 0xa5, 0xe9, 0x0a, 0x48, 0x1f,
	0x54, 0x8d, 0xa8, 0x15, 0x92, 0xd7, 0x10, 0xa1, 0x94, 0x42, 0x26, 0x5e, 0xea, 0x8d, 0x2f, 0xef,
	0x9e, 0x4d, 0x5c, 0xa3, 0x0f, 0x06, 0xcc, 0x3a, 0x8e, 0xdc, 0x42, 0x6c, 0x65, 0x54, 0xe2, 0xa7,
	0xc1, 0x78, 0x78, 0x77, 0x31, 0xe9, 0x46, 0xe8, 0x5a, 0x39, 0x8e, 0xfe, 0xf6, 0x80, 0xcc, 0x24,
	0xe6, 0x1a, 0xfb, 0xba, 0x84, 0x40, 0x58, 0xe7, 0x15, 0x5a, 0x81, 0x41, 0x66, 0xcf, 0x24, 0x81,
	0x27, 0x3f, 0x50, 0x2a, 0x2e, 0xea, 0xc4, 0xb7, 0xf0, 0xfe, 0x4a, 0x52, 0x18, 0x32, 0x54, 0x85,
	0xe4, 0x8d, 0x36, 0x6c, 0x60, 0xd9, 0x3e, 0x44, 0x6e, 0x60, 0xf0, 0x95, 0x97, 0xb8, 0xd2, 0xbb,
	0x06, 0x93, 0xd0, 0xf2, 0x4f, 0x0d, 0xf0, 0x79, 0xd7, 0x20, 0xfd, 0x04, 0xa3, 0xa3, 0x11, 0xce,
	0xd9, 0xf2, 0x12, 0x7c, 0xce, 0xdc, 0x3c, 0x3e, 0x67, 0xf4, 0x16, 0xc8, 0x7b, 0x2c, 0xf1, 0x9f,
	0x75, 0xba, 0x2a, 0xef, 0x50, 0xf5, 0x16, 0x46, 0x47, 0x55, 0x67, 0x28, 0xd2, 0x39, 0x5c, 0x2f,
	0x9b, 0x52, 0xe4, 0xcc, 0xbe, 0x3b, 0x13, 0x55, 0x63, 0x1a, 0xed, 0x95, 0xc6, 0x10, 0x17, 0xdb,
	0xb6, 0xfe, 0xa6, 0x12, 0xcf, 0xba, 0x7e, 0xe5, 0x5c, 0x9f, 0x19, 0x70, 0x81, 0x3a, 0xcf, 0x1c,
	0x4f, 0x1f, 0xe0, 0xe6, 0x64, 0x9f, 0x73, 0x66, 0xb9, 0x87, 0xc1, 0xa1, 0x31, 0xb9, 0x82, 0xa0,
	0x62, 0x6f, 0xdc, 0x96, 0xe6, 0x48, 0x5e, 0x40, 0xc4, 0x6b, 0x86, 0xbf, 0x9c, 0x3f, 0xdd, 0x85,
	0xfe, 0xf1, 0x20, 0xb2, 0x9a, 0x3d, 0x5b, 0x02, 0x63, 0xcb, 0x21, 0x75, 0xff, 0x74, 0xea, 0xc1,
	0x7f, 0x53, 0x0f, 0x1f, 0x49, 0x3d, 0x3a, 0x4e, 0x9d, 0xa4, 0x10, 0xb6, 0x0a, 0x65, 0x12, 0xa7,
	0x9e, 0xfd, 0x3a, 0xdd, 0x7e, 0x4b, 0x85, 0x32, 0xb3, 0xcc, 0xc3, 0xab, 0x2f, 0x2f, 0x37, 0x5c,
	0x6f, 0xdb, 0xb5, 0xe1, 0xa6, 0x5a, 0xe6, 0x8c, 0xd7, 0x9b, 0x77, 0x1f, 0xa7, 0xfa, 0x27, 0xae,
	0xa7, 0xf6, 0xa7, 0x59, 0xc7, 0xf6, 0x71, 0xff, 0x37, 0x00, 0x00, 0xff, 0xff, 0xd4, 0x4e, 0x77,
	0xeb, 0x5f, 0x03, 0x00, 0x00,
}