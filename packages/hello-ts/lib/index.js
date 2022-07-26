"use strict";

/**
 * Add three numbers
 * @param a first number
 * @param b second
 */
var addNumbers = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(a, b) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return timeout(500);

                    case 2:
                        return _context.abrupt("return", a + b);

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function addNumbers(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbers = void 0;
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n) {
    return new Promise(function (res) {
        return setTimeout(res, n);
    });
}
exports.addNumbers = addNumbers;
//== Run the program ==//
_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.t0 = console;
                    _context2.next = 3;
                    return addNumbers(3, 4);

                case 3:
                    _context2.t1 = _context2.sent;

                    _context2.t0.log.call(_context2.t0, _context2.t1);

                case 5:
                case "end":
                    return _context2.stop();
            }
        }
    }, _callee2, undefined);
}))();