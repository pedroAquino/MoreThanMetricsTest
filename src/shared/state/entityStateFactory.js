// @flow

export type EntityState = {
    entityStatus: 'LOADING' | 'ERROR' | 'STABLE';
    errors: any;
    entity: any;
};

const entityStateFactory = ({
    entityStatus = 'LOADING',
    errors = {},
    entity = null
}: EntityState = {}) => ({
    entityStatus,
    errors: entityStatus === 'ERROR' ? errors : {},
    entity
});

export const withEntityState = (entity: any, entityState: EntityState = entityStateFactory()) => ({
    ...entityState,
    entity: entity
});

export default entityStateFactory;