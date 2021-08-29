const exercises = require("./exercises")
// @ponicode
describe("exercises.multiplyByTen", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.multiplyByTen(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.multiplyByTen(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.multiplyByTen(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.multiplyByTen(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.multiplyByTen(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.multiplyByTen(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.areSameLength", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.areSameLength({ length: 10 }, { length: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.areSameLength({ length: 10 }, { length: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.areSameLength({ length: 10 }, { length: 5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.areSameLength({ length: 1 }, { length: 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.areSameLength({ length: 1 }, { length: 2 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.areSameLength(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.areEqual", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.areEqual(90, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.areEqual(30, 320)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.areEqual(380, 4)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.areEqual(550, 400)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.areEqual(90, 320)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.areEqual(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.lessThanNinety", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.lessThanNinety(91)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.lessThanNinety(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.lessThanNinety(90)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.lessThanNinety(0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.lessThanNinety(10.23)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.lessThanNinety(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.greaterThanFifty", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.greaterThanFifty(51)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.greaterThanFifty(49)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.greaterThanFifty(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.greaterThanFifty(0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.greaterThanFifty(-0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.greaterThanFifty(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.add", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.add(90, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.add(30, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.add(400, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.add(0, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.add(30, 70)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.add(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.subtract", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.subtract(-10, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.subtract(-10, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.subtract(90, 550)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.subtract(0.0, 350)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.subtract(1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.subtract(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.divide", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.divide(520, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.divide(1, 520)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.divide(0.0, 70)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.divide(70, 4)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.divide(30, 50)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.divide(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.multiply", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.multiply(100, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.multiply(0, 70)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.multiply(380, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.multiply(1, 550)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.multiply(70, 520)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.multiply(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.getRemainder", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.getRemainder(1, -10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.getRemainder(0.0, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.getRemainder(0.0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.getRemainder(0, 400)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.getRemainder(550, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.getRemainder(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.isEven", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.isEven(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.isEven(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.isEven(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.isEven(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.isEven(-1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.isEven(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.isOdd", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.isOdd(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.isOdd(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.isOdd(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.isOdd(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.isOdd(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.isOdd(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.square", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.square(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.square(-0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.square(10.23)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.square(0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.square(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.square(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.cube", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.cube(0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.cube(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.cube(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.cube(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.cube(10.23)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.cube(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.raiseToPower", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.raiseToPower(0.0, 14)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.raiseToPower(10.0, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.raiseToPower(-0.5, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.raiseToPower(10.23, 14)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.raiseToPower(10.23, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.raiseToPower(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.roundNumber", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.roundNumber(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.roundNumber(0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.roundNumber(1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.roundNumber(10.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.roundNumber(-1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.roundNumber(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.roundUp", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.roundUp(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.roundUp(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.roundUp(-0.5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.roundUp(10.23)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.roundUp(-1.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.roundUp(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.addExclamationPoint", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.addExclamationPoint(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.addExclamationPoint(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.addExclamationPoint(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.addExclamationPoint(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.addExclamationPoint(".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.addExclamationPoint(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.combineNames", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.combineNames("Edmond", "Al Saud")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.combineNames("George", "Zong")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.combineNames(0, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.combineNames("Michael", "Al Saud")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.combineNames("George", "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.combineNames(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.getGreeting", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.getGreeting(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.getGreeting(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.getGreeting(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.getGreeting(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.getGreeting(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.getGreeting(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.getRectangleArea", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.getRectangleArea(0.0, 5)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.getRectangleArea(0, 24000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.getRectangleArea(0, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.getRectangleArea(0, 20)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.getRectangleArea(0.0, 432)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.getRectangleArea(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.getTriangleArea", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.getTriangleArea(10, 544)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.getTriangleArea(0.0, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.getTriangleArea(0, 800)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.getTriangleArea(-10, 287)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.getTriangleArea(0, -1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.getTriangleArea(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.getCircleArea", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.getCircleArea(5000.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.getCircleArea(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.getCircleArea(6370000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.getCircleArea(2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.getCircleArea(3500.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.getCircleArea(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("exercises.getRectangularPrismVolume", () => {
    test("0", () => {
        let callFunction = () => {
            exercises.getRectangularPrismVolume(0.0, 150, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            exercises.getRectangularPrismVolume(5, 320, 24000)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            exercises.getRectangularPrismVolume(1, 9, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            exercises.getRectangularPrismVolume(0, 0.0, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            exercises.getRectangularPrismVolume(2, 15, 287)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            exercises.getRectangularPrismVolume(undefined, -Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
