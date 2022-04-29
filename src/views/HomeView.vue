<template>
  <div class="chat-container">
    <div class="chat-box-card">
      <template v-if="userList.length > 0">
        <el-scrollbar class="user-list">
          <div v-for="item in userList" :key="item.targetId" class="user-item">
            <div class="user-avatar">
              <img :src="item.photo" alt="" />
            </div>
            <div class="latestMessage-container">
              <div class="targetId">
                <span class="target-realName text-ellipsis">aaaaaasd</span>
                <span class="last-time">2020-10-21</span>
              </div>
              <div class="latestMessage text-ellipsis">
                <span>asdfsadfsadfss</span>
              </div>
            </div>
          </div>
        </el-scrollbar>
        <div class="talk-list">
          <template v-if="targetId">
            <!-- 顶部用户信息 -->
            <div class="user-info">
              <div class="user-info-top">
                <img :src="targetUserInfo.photo" alt="" />
              </div>
              <div class="user-info-top-name-position">
                <div>
                  <div class="real-name text-ellipsis">asdfsdf</div>
                  <div class="online-status"></div>
                </div>
              </div>
            </div>
            <!-- 消息窗口 -->
            <el-scrollbar></el-scrollbar>
            <div class="chat-textarea"></div>
            <div class="tool-list"></div>
          </template>
          <div v-else class="no-talk">Select user</div>
        </div>
      </template>
      <div v-else class="no-contacts">
        <img src="@/assets/img/chat_no_data.png" alt="" />
        <span>No chat history</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import useCurrentInstance from "@/utils/im";

export default defineComponent({
  setup() {
    const { proxy } = useCurrentInstance(); //融云 Im
    console.log(proxy.im, "loaded");
    let userList = reactive([
      //聊天用户列表
      {
        targetId: 1,
        photo: require("@/assets/img/icon-user-default.png"),
        realName: "asdfsdf",
      },
    ]);
    const targetId = ref(0);
    let targetUserInfo = reactive({});

    return {
      userList,
      targetId,
      targetUserInfo,
    };
  },
});
</script>
<style lang="scss" scoped>
.chat-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.chat-box-card {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-left: 380px;
  box-sizing: border-box;
  background-color: #fff;
  display: flex;
  .user-list {
    // 联系人列表
    display: inline-block;
    width: 380px;
    margin-left: -380px;
    height: 100%;
    box-sizing: border-box;
    overflow-y: auto;
    background-color: #f7f8fd;
  }
  .user-item {
    cursor: pointer;
    padding: 25px 20px;
    display: flex;
    align-items: center;
    height: 80px;
    position: relative;
    border-bottom: 1px solid #f0f0f1;
    .targetId {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 18px;
      font-family: Lato-Bold, Lato;
      font-weight: bold;
      color: #3a3b4b;
      height: 32px;
      line-height: 32px;
      .last-time {
        flex-shrink: 0;
        float: right;
        font-size: 12px;
        font-family: Lato-Regular, Lato;
        font-weight: normal;
        color: #909399;
        line-height: 18px;
      }
    }
    .user-avatar {
      margin-right: 20px;
      img {
        display: block;
        width: 60px !important;
        height: 60px !important;
        border-radius: 50%;
      }
    }
    .latestMessage-container {
      align-self: flex-start;
      position: relative;
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .target-realName {
        display: block;
        max-width: 160px;
      }
      .latestMessage {
        margin-top: 4px;
        margin-right: 35px;
        font-size: 14px;
        font-family: Lato-Regular, Lato;
        font-weight: 400;
        color: #c0c4cc;
        line-height: 17px;
        span {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          white-space: normal;
        }
      }
    }
    &:hover {
      background-color: #fafafa;
    }
    &:active {
      background-color: #fff;
    }
  }
  .talk-list {
    // 聊天消息列表
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .history {
      flex: 1;
    }
  }
  .no-contacts {
    // 没有联系人
    text-align: center;
    padding-right: 380px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25.8vh;
    font-size: 14px;
    font-family: Lato-Regular, Lato;
    font-weight: 400;
    color: #3a3b4b;
    line-height: 22px;
    img {
      display: block;
      width: 163px;
      margin-bottom: 19px;
    }
  }
}
/*简历信息*/
.user-info {
  .user-info-top {
    height: 100px;
    padding: 0 60px;
    font-size: 21px;
    font-family: Lato-Bold, Lato;
    font-weight: bold;
    color: #3a3b4b;
    line-height: 32px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #f0f0f1;
    img {
      width: 60px;
      height: 60px;
      display: block;
      border-radius: 50%;
    }
    .user-info-top-name-position {
      margin-left: 20px;
      & > div:first-child {
        display: flex;
        align-items: center;
      }
      .real-name {
        flex-shrink: 1;
        height: 32px;
        max-width: 280px;
      }
      .online-status {
        // 在线状态
        margin-left: 10px;
        margin-right: 30px;
        height: 26px;
        font-size: 14px;
        font-family: Lato-Regular, Lato;
        font-weight: 400;
        line-height: 22px;
        & > div {
          width: 100%;
          height: 100%;
          padding-left: 10px;
          padding-right: 10px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }
        .point {
          margin-right: 6px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .online {
          background: rgba(107, 185, 33, 0.1);
          color: #6bb921;
          .point {
            background: #6bb921;
          }
        }
        .offline {
          background: rgba(192, 196, 204, 0.2);
          color: #909399;
          .point {
            background: #c0c4cc;
          }
        }
      }
      .user-info-top-position {
        font-size: 12px;
        font-family: Lato-Regular, Lato;
        font-weight: 400;
        color: #909399;
        line-height: 18px;
        max-width: 364px;
      }
    }
  }
  .el-avatar {
    width: 60px !important;
    height: 60px !important;
    flex-shrink: 0;
  }
  .user-info-top-resume,
  .user-info-top-interview,
  .user-info-top-block {
    // 面试、Offer、静音/拉黑/举报
    font-size: 32px;
    font-weight: normal;
    margin-right: 0;
    user-select: none;
    cursor: pointer;
  }
  .show-resume-dialog {
    margin-right: 30px;
  }
  .user-info-top-block {
    margin-left: 30px;
  }
}
.no-talk {
  // 没有聊天对象
  min-height: 555px;
  line-height: 350px;
  text-align: center;
}
</style>
