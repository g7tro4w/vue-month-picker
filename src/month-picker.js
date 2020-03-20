import languages from './languages'

export default {
  props: {
    lang: {
      type: String,
      default: 'en',
      validator: function (value) {
        return Object.keys(languages).some(l => Object.is(l, value))
      },
      required: false
    },
    months: {
      type: Array,
      default: null,
      validator: function (value) {
        return value.length === 12
      },
      required: false
    },
    default: {
      type: Object,
      default: () => {
        const currentDate = new Date()
        return {
          from: new Date(),
          to: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
        }
      }
    },
    showYear: {
      type: Boolean,
      default: true,
      required: false
    },
    editableYear: {
      type: Boolean,
      default: false,
      required: false
    },
    noDefault: {
      type: Boolean,
      default: false,
      required: false
    },
    clearable: {
      type: Boolean,
      default: false,
      required: false
    },
    variant: {
      type: String,
      default: 'default',
      required: false,
      validator: function (value) {
        return ['default', 'dark'].includes(value)
      }
    },
    availableMonths: {
      type: Array,
      default: () => ([])
    },
    maxYear: {
      type: Number,
    },
    minYear: {
      type: Number,
    },
    disableUnavailableMonths: {
      type: Boolean,
      default: false
    }
  }
}
