var Proxy = require("./proxy");

var PrototypeProxy = module.exports = exports =  function(){
	var self = this;

	self.interceptedObjects = {};
	self.originalObects = {};
};

PrototypeProxy.prototype = Object.create(Proxy.prototype);

PrototypeProxy.prototype.create = function(objectToIntercept, interceptor){
	var self = this;

	if(!objectToIntercept.prototype)
		throw new Error("Can't create ObjecteProxy for Object because it is not a prototype");

	self.saveOriginalObject(objectToIntercept);
	self.addInterceptor(objectToIntercept.prototype,interceptor);
	objectToIntercept = self.addConstructorInterceptor(objectToIntercept,interceptor);
	self.registerInterceptorForObject(objectToIntercept,interceptor);

	return objectToIntercept;
};

PrototypeProxy.prototype.addConstructorInterceptor = function(objectToIntercept,interceptor){
	if(objectToIntercept instanceof Function){
		
		var targetFunction = objectToIntercept;

		var InterceptedObject = function(){
			return interceptor.functionInvocation(targetFunction,arguments);
		};
		InterceptedObject.prototype = Object.create(objectToIntercept.prototype);
		objectToIntercept = InterceptedObject;
	}

	return objectToIntercept;
}

PrototypeProxy.prototype.saveOriginalObject = function(originalObject){
	var self = this;

	var savedObject = function(){};

	if(originalObject instanceof Function)
		savedObject.prototype = Object.create(originalObject.prototype);

	self.forEachObjectFunction(originalObject.prototype,function(property){
		savedObject.prototype[property] = originalObject.prototype[property];
	});

	var objectName = self.getObjectName(originalObject); 
	self.originalObects[objectName] = {
		originalObect : originalObject,
		savedObject : savedObject
	};

	return savedObject;
};

PrototypeProxy.prototype.reset = function(){
	var self = this;
	for(var savedObject in self.originalObects){
		self.originalObects[savedObject].originalObect.prototype = Object.create(self.originalObects[savedObject].savedObject.prototype);
	}
	
	self.originalObects = {};
	self.interceptors = {};
};