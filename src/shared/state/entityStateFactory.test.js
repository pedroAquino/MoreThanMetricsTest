import { withEntityState } from './entityStateFactory';

describe('entity state tests', () => {
    it('should add entity state to any entity', () => {
        const entitty = {
            id: 20,
            name: 'John'
        };
        const enhancedJohn = withEntityState(entitty);
        expect(enhancedJohn).toEqual({
            ...entitty,
            entityStatus: 'LOADING',
            errors: {}
        });
    });
});