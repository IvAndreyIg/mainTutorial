const person ={
    surname:'Старк',
    knows:function (what,name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`);        
    }
}





const john={surname:`Сноу`}
const jack={surname:`Sparrow`}
// person.knows('все','Бран')
// person.knows.call(john,'ничего не','Джон')
// person.knows.apply(john,['ничего не','Джон'])
// person.knows.call(john,...['ничего не','Джон'])

const bound=person.knows.bind(john,'ничего не','Джон')
const bound2=bound.bind(jack,'ничего не','джек')
const bound3=bound2.bind(jack)
bound('ничего не','джекер')
bound2('ничего не','джекер')
bound3('ничего не','джекер')
//=========
console.dir(person.knows);
console.dir(bound);
console.dir(bound2);
console.dir(bound3);