import { ref, watch } from 'vue';
import debounce from 'lodash/debounce';
import _ from 'lodash';

/**
 * @template T
 * @param {Ref<T>} source - Исходный ref
 * @param {number} wait - Ожидание в миллисекундах для debounce
 * @returns {Ref<T>} - Новый ref, обновляющийся с debounce при обновлении исходного ref-а
 */
export function debouncedRef(source, wait) {
  const debounced = ref(undefined);

  watch(
    source,
    (newValue) => {
      debounce(() => {
        debounced.value = newValue;
      }, wait);
    },
    {
      immediate: true,
    },
  );

  return debounced;
}
