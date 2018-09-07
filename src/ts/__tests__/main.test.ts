import {getFixturePath} from 'jest-fixtures';



describe('first test', () => {
    it('should run tests', () => {
        expect(1).toBe(1);
    });

    it('example', async () => {
        let fixturePath = await getFixturePath('resources', 'product-page');
        let fixtureFilePath = await getFixturePath('resources', 'product-page', 'productPageFixture.html');
    });
});