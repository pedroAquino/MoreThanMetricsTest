// @flow

export type EntityState = {
    entityStatus: 'LOADING' | 'ERROR' | 'STABLE' | 'PERSISTING' | 'PERSISTING_ERRORS';
    errors: any;
};

const entityStateFactory = ({
    entityStatus = 'LOADING',
    errors = {}
}: EntityState = {}) => ({
    entityStatus,
    errors: entityStatus === 'ERROR' ? errors : {},
});

export const withEntityState = (entity: any) => Object.assign({}, entity, {
    ...entityStateFactory()
});

export default entityStateFactory;