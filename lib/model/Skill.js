'use strict';
class Skill {
    constructor(name) {
        if (name instanceof String) {
            this.name = name;
        }
    }

    // get father Skill if argument is not defined
    // set father Skill when argument is defined
    father(father) {
        if (father) {
            if (father instanceof Skill) {
                return this.father = father;
            }
            else {
                throw new Error('Skill.father/ Setting father/ argument should be an instance of Skill class');
            }

        } else {
            return this.father;
        }
    }

}
