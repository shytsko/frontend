const cart = {
    items: {        // Ключ - id товара, значение - количество товара
        1: 1,
        2: 2,
        6: 1,
    },

    addItem(id) {
        if (id in this.items)
            this.items[id]++;
        else
            this.items[id] = 1;
    },

    removeItem(id) {
        if (id in this.items) {
            this.items[id]--;
            if (this.items[id] === 0)
                this.removeItemAll(id)
        }
    },

    setItemCount(id, count) {
        if (count > 0)
            this.items[id] = count;
        else
            this.removeItemAll(id)
    },

    removeItemAll(id) {
        delete this.items[id];
    },

    isEmpty() {
        return Object.keys(this.items).length === 0;
    }
};
