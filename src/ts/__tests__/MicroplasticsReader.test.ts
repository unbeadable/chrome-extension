import {MicroplasticAsinLookup} from '../MicroplasticAsinLookup';

describe('MicroplasticAsinLookup', () => {
    it('should do stuff', async () => {
        const microplasticsReader = new MicroplasticAsinLookup();
        const result = await microplasticsReader.lookup('test');

        expect(result).toBe('Polyethylene');
    });
});