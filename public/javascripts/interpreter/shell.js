define("interpreter/shell", ["lodash", "scarlet"], function(_, Scarlet) {
	function Shell() {

		var self = this;

		self.execute = function(command) {

			var __outputBuffer = "";

			function print(str){
				__outputBuffer += "<span style='color: #3C403B'># " + new Date().format("hh:mm:ss") + ":</span>&gt; " + str + "<br/>\n";
			}

			var traceInterceptor = function(info, method, args){
			  var result = method.call(this, info, method, args);
			  var query = scarlet.interceptQuery(info, method, args, result);
			  query.traceTo(print);
			  return result;
			};

			try
			{
				eval(command);
			} catch (err) {
				__outputBuffer += err.toString();
			}

			return __outputBuffer;
		};
	}
	return Shell;
});