<template>
  <div>
    <div class="main-block">
      <BannersCardsNewsBlocks
        v-for="(block, index) in dataBlocks"
        :key="block.id"
        :data="block"
        :sourceRef="ref"
        @remove="removeBlock(index)"
        class="card__block"
      />
      <button @click="openFileDialog()" class="btn btn-default card__block-add">
        <input
          ref="fileDialog"
          @change="addImage"
          style="display: none"
          type="file"
        />
        Добавить<br />фото
      </button>
    </div>
    <div class="main-block__bottom">
      <button ref="btnSave" @click="save" class="btn btn-default btn-save">
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import BannersCardsNewsBlocks from "@/components/adminPages/banners/BannersCardsNewsBlocks.vue";
// import firebase from "@/database";
import firebase from "firebase";
import "firebase/database";
import "firebase/storage";

export default {
  name: "BannersCardsNews",
  components: {
    BannersCardsNewsBlocks,
  },
  data() {
    return {
      ref: "banners/newscards/",
      dataBlocks: [],
    };
  },
  methods: {
    removeBlock(index) {
      // this.dataBlocks = this.dataBlocks.filter((item) => item !== block);
      this.dataBlocks.splice(index, 1);
      this.$refs.btnSave.textContent = "Сохранить";
      this.$refs.btnSave.classList.remove("show");
    },
    openFileDialog() {
      this.$refs.fileDialog.click();
      this.$refs.btnSave.textContent = "Сохранить";
      this.$refs.btnSave.classList.remove("show");
    },
    addImage() {
      const file = this.$refs.fileDialog.files[0];
      if (file !== undefined) {
        this.dataBlocks.push({
          image: null,
          imageFile: this.$refs.fileDialog.files[0],
        });
      }
    },
    save() {
      this.$refs.btnSave.classList.add("show");
      this.$refs.btnSave.textContent = "Сохраняется";

      const storageRef = firebase.storage().ref(this.ref);
      const databaseRef = firebase.database().ref(this.ref);

      if (this.dataBlocks.length > 0) {
        Promise.all(
          this.dataBlocks.map((value) => {
            if (value.imageFile !== undefined)
              return new Promise((resolve) => {
                resolve(
                  storageRef
                    .child(value.image)
                    .put(value.imageFile)
                    .then((snapshot) => snapshot.ref.getDownloadURL())
                    .then((url) => (value.imageUrl = url))
                );
              });
          })
        ).then((result) =>
          result.map((url) => {
            this.handleData(url);
          })
        );
      } else {
        // console.log(this.dataBlocks.length);
        storageRef.delete().catch((error) => {
          console.log(error);
        });
        databaseRef.remove().catch((error) => {
          console.log(error);
        });
      }
    },
    handleData(url) {
      this.dataBlocks.map((value) => {
        let id = Math.floor(Math.random() * 10000);
        value.id = id;
        return {
          id: value.id,
          image: value.image,
          imageUrl: url,
          url: value.url,
        };
      });
      const dataSet = firebase.database().ref(this.ref);
      dataSet
        .set(this.dataBlocks)
        .then((this.$refs.btnSave.textContent = "Сохранено"));
    },

    onRead() {
      const baseRef = firebase.database().ref(this.ref);
      baseRef.on("value", (snapshot) => {
        if (snapshot.val() === null) {
          this.dataBlocks = [];
        } else {
          this.dataBlocks = snapshot.val();
        }
        // console.log(this.dataBlocks);
      });
    },
  },
  created() {
    this.onRead();
  },
};
</script>

<style lang="scss" scoped>
.main-block {
  display: flex;
  min-height: 240px;
  align-items: start;
  padding: 0 10px 0 40px;
  flex-wrap: wrap;

  &__bottom {
    flex-wrap: wrap;

    .btn-save {
      margin: 0 0 20px 20px;
      &.show {
        color: #178817;
        border: 2px solid #55cc55;
      }
    }
  }
  .btn {
    width: 165px;
    height: 45px;
    margin-left: 20px;

    &.card__block-add {
      height: 90px;
      margin: 40px 0;
    }
  }
}
</style>