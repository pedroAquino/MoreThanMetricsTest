// @flow

export type EntityState<T> = {
    entityStatus: 'LOADING' | 'ERROR' | 'STABLE';
    errors: any;
    entity: T;
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

export const withEntityState = (entityState: EntityState = entityStateFactory(), entity: any) => ({
    ...entityState,
    entity: entity
});

export default entityStateFactory;