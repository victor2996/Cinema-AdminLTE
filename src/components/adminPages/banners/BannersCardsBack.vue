<template>
  <div class="main-block">
    <img
      v-if="picture !== null"
      ref="filePreview"
      :src="picture"
      class="preview"
    />
    <input
      type="file"
      ref="fileDialog"
      @change="addImage"
      style="display: none"
      accept="image/*"
    />

    <button
      v-if="picture === null"
      @click="openFileDialog"
      class="btn btn-default"
    >
      Добавить
    </button>

    <button
      v-if="picture !== null"
      @click="deleteImage"
      class="btn btn-default info-block__remove"
    >
      Удалить
    </button>
  </div>
</template>

<script>
// import firebase from "@/database";
import firebase from "firebase";
import "firebase/database";
import "firebase/storage";

export default {
  name: "BannersCardsBack",

  data() {
    return {
      imageData: null,
      picture: null,
      imageRef: "banners/backcard/",
    };
  },

  methods: {
    openFileDialog() {
      const event = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      this.$refs.fileDialog.dispatchEvent(event);
    },

    addImage() {
      const file = this.$refs.fileDialog.files[0];
      this.previewImage(file);
    },

    previewImage(file) {
      const preview = this.$refs.filePreview;
      // console.log(preview);
      const reader = new FileReader();
      reader.onload = (e) => {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);

      this.imageData = file;
      this.onUpload();
    },

    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(this.imageRef)
        .child("backcard");

      storageRef
        .put(this.imageData)
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => (this.picture = url))
        .then((url) => {
          firebase.database().ref(this.imageRef).set({
            name: "backcard",
            url: url,
          });
        });
    },

    deleteImage() {
      this.picture = null;
      this.$refs.filePreview.src = null;
      // this.$emit("imageChanged", null);

      const storageRef = firebase
        .storage()
        .ref(this.imageRef)
        .child("backcard");

      storageRef.delete().catch((error) => {
        console.log(error);
      });

      const databaseRef = firebase.database().ref(this.imageRef);
      databaseRef.remove().catch((error) => {
        console.log(error);
      });
    },

    onDownload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(this.imageRef)
        .child("backcard");

      storageRef.getDownloadURL().then(
        (url) => (this.picture = url),
        (error) => console.log(error)
      );
    },

    onRead() {
      const baseRef = firebase.database().ref(this.imageRef);
      baseRef.on("value", (snapshot) => {
        const data = snapshot.val();
        this.picture = data.url;
      });
    },
  },

  mounted() {
    // this.onDownload();
    this.onRead();
  },
};
</script>

<style lang="scss" scoped>
.main-block {
  display: flex;
  align-items: center;
  height: 320px;
  padding: 0 40px;

  .btn {
    width: 165px;
    height: 45px;
    margin-left: 20px;
  }
}

.preview {
  width: 200px;
  height: 300px;
  background: #adbcc9;
}
</style>