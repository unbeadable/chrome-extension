import {MicroplasticAsinLookup} from '../MicroplasticAsinLookup';

describe('MicroplasticAsinLookup', () => {
    it('should do stuff', async () => {
        const microplasticsReader = new MicroplasticAsinLookup();
        const result = await microplasticsReader.lookup('B00COKKPJK');

        expect(result).toBe('Polyethylene');
    });
});