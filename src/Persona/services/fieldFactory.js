export type Field = {
    id: number,
    title: string,
    fieldType: 'short-text' | 'long-text' | 'image' | 'image-gallery' | 'number',
    data: string | number | Array<string>,
    columnId: number,
    prevId : number,
    nextId: number,
    src: string;
    imageSources: Array<string>;
    formatedText: Array<string>;
    editable: boolean;
};

const fieldFactory = ({
    id = 0,
    title = '',
    fieldType = '',
    data = '',
    src = '',
    imageSources = '',
    formatedText = [],
    columnId =  0,
    editable = false,
    prevId =  0,
    nextId =  0,
    prev_id = 0,
    column_id = 0,
    next_id = 0,
    field_type = ''
}: any = {}): Field => ({
    id,
    title,
    data,
    editable,
    columnId: columnId || column_id,
    prevId: prevId || prev_id,
    nextId: nextId || next_id,
    
    get fieldType() {
        const value = fieldType || field_type;
        return ['short-text', 'long-text', 'image', 'image-gallery', 'number']
            .find(fType => fType === value.replace('_', '-')) || 'short-text';
    },

    get src() {
        return this.fieldType === 'image' ? this.data : '';
    },

    get imageSources() {
        return this.fieldType === 'image-gallery' ? this.data : [];
    },

    get formatedText() {
        return this.fieldType === 'long-text' ? this.data : [];
    }
});

export default fieldFactory;