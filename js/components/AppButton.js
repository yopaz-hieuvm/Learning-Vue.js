export default {
    template: `
        <button 
            class="border rounded px-5 py-2 disabled:cursor-not-allowed"
            :class="{
                'bg-gray-200 hover:bg-gray-400' : type==='muted', 
                'bg-red-200 hover:bg-red-400' : type==='primary',
                'loader': processing
            }" 
            :disabled="processing"
        >
            <slot />    
        </button>
    `,

    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
}