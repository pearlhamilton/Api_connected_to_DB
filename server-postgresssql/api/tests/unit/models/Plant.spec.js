const Plant = require('../../../models/plant');


// const pg = require('pg'); // these don't actually do anything
// jest.mock('pg');// 

// jest.mock('../../../dbConfig/init'); //neither does this

const db = require('../../../dbConfig/init')




describe('Plant', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with plants on successful db query', async () => {
            const spy = jest.spyOn(db, 'query') //spy on dq.query 
            
               .mockResolvedValueOnce({ rows: [{}, {}, {}]}); // mock the values that would normally be sent back from the database
            const all = await Plant.all; // To test the all function in my model, I call on Plant.all 
            console.log(all)
            expect(all).toHaveLength(3)
            // expect(spy).toHaveBeenCalledTimes(1)
        })

          describe('all', () => {
        test('it resolves with plants on successful db query', async () => {
            db.query
                     .mockResolvedValueOnce({ rows: [{}, {}, {}]});

            //    .mockResolvedValueOnce({ rows: [{}, {}, {}]}); // mock the values that would normally be sent back from the database
            const all = await Plant.all; // To test the all function in my model, I call on Plant.all 
            console.log(all)
            expect(all).toHaveLength(3)
            // expect(spy).toHaveBeenCalledTimes(1)
        })



    describe('findById', () => {
        test('it resolves with dog on successful db query', async () => {
            let plantData = { id: 1, name: 'Test Plant' }
            db.query
                .mockResolvedValueOnce({rows: [ plantData] });
            const result = await Plant.findById(1);
            console.log(result)
            expect(result).toBeInstanceOf(Plant)
        })
    });
// function knows to use the data in the function

    });

})

// Jest spies are instantiated using jest.spyOn(obj, 'functionName'). Note: you can’t spy something that doesn’t exist on the object.
    
})