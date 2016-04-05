.config(['$provide', function ($provide) {
    $provide.decorator('$log', ['$delegate', function ($delegate) {
        var $log;
        var _enableStatus = true;

        var _logTypes = ['debug', 'log', 'warn', 'info', 'error'];
        var _activeLogs = _logTypes;

        var _logCheckState = 'Empty';

        $log = {
            delipenguenLogging: function (flag) {
                _enableStatus = !!flag;
                _logCheckState = 'flag';
            },
            activeLogs: function (activeLogsArray) {
                _logCheckState = 'array';
                _activeLogs = activeLogsArray;
            }
        };

        function checkCurrentLogForActive(logTypeName) {
            return _activeLogs.indexOf(logTypeName) >= 0;
        }

        var logsMessage = function (_logTypeName) {
            var _returnValue = "DELIPENGUEN > MESAJ";
            switch (_logTypeName) {
                case 'debug':
                    _returnValue = "DELIPENGUEN > DEBUG\n";
                    break;
                case 'log':
                    _returnValue = "DELIPENGUEN > LOG\n";
                    break;
                case 'warn':
                    _returnValue = "DELIPENGUEN > WARN\n";
                    break;
                case 'info':
                    _returnValue = "DELIPENGUEN > INFO\n";
                    break;
                case 'error':
                    _returnValue = "DELIPENGUEN > ERROR\n";
                    break;
            }
            return _returnValue;
        };

        _logTypes.forEach(function (_logTypeName) {
            $log[_logTypeName] = function () {
                if (!_enableStatus) return;

                var currentLogActiveStatus = checkCurrentLogForActive(_logTypeName);
                if (!currentLogActiveStatus) return;

                var _delegateInit = $delegate;
                var _args = [].slice.call(arguments);
                _args[0] = [logsMessage(_logTypeName), '', _args[0]].join('');
                _delegateInit[_logTypeName].apply(_delegateInit, _args);
            }
        });

        return $log;
    }]);
}])
.run(function($log) {
    // TEST için true/false değerlerini değiştirin!
    $log.delipenguenLogging(true);
})
.controller('MainCtrl', ['$log', function($log){
    $log.debug('DEBUG!');
    $log.log('LOG!');
    $log.warn('WARN!');
    $log.error('ERROR!');
    $log.info('INFO!');
}]);
