<template>
  <div class="d-flex flex-column mb-6">
    <draggable
      :list="listaEjercicios"
      :group="{ name: 'exercises', pull: 'clone', put: true }"
      :sort="false"
      @start="onDragStart"
      @end="ondragEnd"
      :move="checkMove"
    >
      <div v-for="(item, i) in listaEjercicios" :key="i" class="listItems">
        <div class="item">
          <div class="textTitle">
            {{ item.categoria }}
          </div>
          <div>
            <img max-height="100" min-height="100" :src="item.url" />
          </div>
          <div>
            {{ item.nombre }}
          </div>
        </div>
      </div>
    </draggable>
  </div>
</template>

<style scoped>
.listItems {
  height: auto;
  width: 80%;
  margin: 0 auto;
  padding: 0.5rem;
}

.item {
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
}

.item .textTitle {
  color: rgb(185, 181, 181);
  font-weight: 600;
}

.listItems img {
  width: 208px;
  height: 117px;
  position: relative;
}
</style>

<script>
import draggable from "vuedraggable";

export default {
  props: {
    listaEjercicios: {
      type: Array,
      default: [],
    },
    listExist: {
      type:Array,
      default:[]
    },
    selectAtleta: {
      type: Object | null,
      required: true,
      default: null
    }
  },
  components: {
    draggable,
  },
  data() {
    return {};
  },
  methods: {
    ondragEnd(evnt) {
      //console.log(evnt, 'probando')
      const index = evnt.oldIndex;

      const item = {
        ...this.listaEjercicios[index],
        repeticiones:0
      };

      this.$emit("dragItem", item);
    },
    onDragStart() {
      this.$emit('move')
    },
    checkMove: function (evt) {
      const listId = this.listExist.map(item => {
        return item.id
      })
      return !listId.includes(evt.draggedContext.element.id) && this.selectAtleta != null;
    },
  },
};
</script>
