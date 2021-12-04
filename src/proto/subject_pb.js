// source: subject/subject.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.subject.Member', null, global);
goog.exportSymbol('proto.subject.Subject', null, global);
goog.exportSymbol('proto.subject.SubjectListRequest', null, global);
goog.exportSymbol('proto.subject.SubjectListResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.subject.SubjectListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.subject.SubjectListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.subject.SubjectListRequest.displayName = 'proto.subject.SubjectListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.subject.SubjectListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.subject.SubjectListResponse.repeatedFields_, null);
};
goog.inherits(proto.subject.SubjectListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.subject.SubjectListResponse.displayName = 'proto.subject.SubjectListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.subject.Member = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.subject.Member, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.subject.Member.displayName = 'proto.subject.Member';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.subject.Subject = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.subject.Subject.repeatedFields_, null);
};
goog.inherits(proto.subject.Subject, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.subject.Subject.displayName = 'proto.subject.Subject';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.subject.SubjectListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.subject.SubjectListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.subject.SubjectListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.subject.SubjectListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    cursor: jspb.Message.getFieldWithDefault(msg, 1, 0),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.subject.SubjectListRequest}
 */
proto.subject.SubjectListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.subject.SubjectListRequest;
  return proto.subject.SubjectListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.subject.SubjectListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.subject.SubjectListRequest}
 */
proto.subject.SubjectListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCursor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.subject.SubjectListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.subject.SubjectListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.subject.SubjectListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.subject.SubjectListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCursor();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 cursor = 1;
 * @return {number}
 */
proto.subject.SubjectListRequest.prototype.getCursor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.subject.SubjectListRequest} returns this
 */
proto.subject.SubjectListRequest.prototype.setCursor = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.subject.SubjectListRequest.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.subject.SubjectListRequest} returns this
 */
proto.subject.SubjectListRequest.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.subject.SubjectListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.subject.SubjectListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.subject.SubjectListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.subject.SubjectListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.subject.SubjectListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    subjectsList: jspb.Message.toObjectList(msg.getSubjectsList(),
    proto.subject.Subject.toObject, includeInstance),
    total: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cursor: jspb.Message.getFieldWithDefault(msg, 3, 0),
    hasnext: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.subject.SubjectListResponse}
 */
proto.subject.SubjectListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.subject.SubjectListResponse;
  return proto.subject.SubjectListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.subject.SubjectListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.subject.SubjectListResponse}
 */
proto.subject.SubjectListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.subject.Subject;
      reader.readMessage(value,proto.subject.Subject.deserializeBinaryFromReader);
      msg.addSubjects(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotal(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCursor(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasnext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.subject.SubjectListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.subject.SubjectListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.subject.SubjectListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.subject.SubjectListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubjectsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.subject.Subject.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCursor();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getHasnext();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * repeated Subject subjects = 1;
 * @return {!Array<!proto.subject.Subject>}
 */
proto.subject.SubjectListResponse.prototype.getSubjectsList = function() {
  return /** @type{!Array<!proto.subject.Subject>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.subject.Subject, 1));
};


/**
 * @param {!Array<!proto.subject.Subject>} value
 * @return {!proto.subject.SubjectListResponse} returns this
*/
proto.subject.SubjectListResponse.prototype.setSubjectsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.subject.Subject=} opt_value
 * @param {number=} opt_index
 * @return {!proto.subject.Subject}
 */
proto.subject.SubjectListResponse.prototype.addSubjects = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.subject.Subject, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.subject.SubjectListResponse} returns this
 */
proto.subject.SubjectListResponse.prototype.clearSubjectsList = function() {
  return this.setSubjectsList([]);
};


/**
 * optional int64 total = 2;
 * @return {number}
 */
proto.subject.SubjectListResponse.prototype.getTotal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.subject.SubjectListResponse} returns this
 */
proto.subject.SubjectListResponse.prototype.setTotal = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 cursor = 3;
 * @return {number}
 */
proto.subject.SubjectListResponse.prototype.getCursor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.subject.SubjectListResponse} returns this
 */
proto.subject.SubjectListResponse.prototype.setCursor = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bool hasNext = 4;
 * @return {boolean}
 */
proto.subject.SubjectListResponse.prototype.getHasnext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.subject.SubjectListResponse} returns this
 */
proto.subject.SubjectListResponse.prototype.setHasnext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.subject.Member.prototype.toObject = function(opt_includeInstance) {
  return proto.subject.Member.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.subject.Member} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.subject.Member.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.subject.Member}
 */
proto.subject.Member.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.subject.Member;
  return proto.subject.Member.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.subject.Member} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.subject.Member}
 */
proto.subject.Member.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.subject.Member.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.subject.Member.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.subject.Member} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.subject.Member.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.subject.Member.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.subject.Member} returns this
 */
proto.subject.Member.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.subject.Member.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.subject.Member} returns this
 */
proto.subject.Member.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.subject.Subject.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.subject.Subject.prototype.toObject = function(opt_includeInstance) {
  return proto.subject.Subject.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.subject.Subject} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.subject.Subject.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.subject.Member.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.subject.Subject}
 */
proto.subject.Subject.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.subject.Subject;
  return proto.subject.Subject.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.subject.Subject} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.subject.Subject}
 */
proto.subject.Subject.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = new proto.subject.Member;
      reader.readMessage(value,proto.subject.Member.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.subject.Subject.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.subject.Subject.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.subject.Subject} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.subject.Subject.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.subject.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.subject.Subject.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.subject.Subject} returns this
 */
proto.subject.Subject.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.subject.Subject.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.subject.Subject} returns this
 */
proto.subject.Subject.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Member members = 3;
 * @return {!Array<!proto.subject.Member>}
 */
proto.subject.Subject.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.subject.Member>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.subject.Member, 3));
};


/**
 * @param {!Array<!proto.subject.Member>} value
 * @return {!proto.subject.Subject} returns this
*/
proto.subject.Subject.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.subject.Member=} opt_value
 * @param {number=} opt_index
 * @return {!proto.subject.Member}
 */
proto.subject.Subject.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.subject.Member, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.subject.Subject} returns this
 */
proto.subject.Subject.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};


goog.object.extend(exports, proto.subject);