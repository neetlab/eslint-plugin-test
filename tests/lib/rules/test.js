/**
 * @fileoverview my first eslint rule
 * @author Ryo Igarashi
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/test"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("test", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var foo = 'bar'",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
