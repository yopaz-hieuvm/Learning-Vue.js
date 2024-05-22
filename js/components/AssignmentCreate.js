export default {
    template: `
        <div class="border border-gray-600 text-black flex">
            <input v-model="newAssignment" placeholder="New assignment..." class="p-2" /> 
            <button class="bg-white p-2 border-l" @click="add()">Add</button>
        </div>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';
        }
    }
}