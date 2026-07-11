// ==========================================
// Scene Manager
// ==========================================

const SceneManager = {

    currentScene: 1,

    nextScene() {

        this.currentScene++;

        switch (this.currentScene) {

            case 2:
                loadScene2();
                break;

        }

    }

};