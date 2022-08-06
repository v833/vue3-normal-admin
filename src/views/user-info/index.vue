<template>
  <div class="user-info-container">
    <el-card class="print-box">
      <el-button v-print="printObj" type="primary" :loading="lodaing" @click="handlePrintClick">{{
          $t('msg.userInfo.print')
      }}</el-button>
    </el-card>
    <el-card>
      <div class="user-info-box" id="userInfoBox">
        <!-- title -->
        <h2>{{ $t('msg.userInfo.title') }}</h2>
        <!-- head -->
        <div class="header">
          <!-- table -->
          <el-descriptions :column="2" border>
            <el-descriptions-item :label="$t('msg.userInfo.name')">
              {{ userData.username }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.sex')">
              {{ userData.gender }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.nation')">
              {{ userData.nationality }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.mobile')">
              {{ userData.mobile }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.province')">
              {{ userData.province }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.date')">
              {{ $filters.dateFilter(userData.openTime) }}
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.remark')" :span='2'>
              <el-tag v-for="(item, index) in userData.remark" :key="index" class="remark" size="samll">{{ item }}
              </el-tag>
            </el-descriptions-item>
            <el-descriptions-item :label="$t('msg.userInfo.address')" :span="2">
              {{ userData.address }}
            </el-descriptions-item>
            <!-- avatar -->
          </el-descriptions>
          <el-image class="avatar" :src="userData.avatar"></el-image>
        </div>
        <!-- body -->
        <el-descriptions direction="vertical" :column="1" border>
          <el-descriptions-item :label="$t('msg.userInfo.experience')">
            <ul>
              <li v-for="(item, index) in userData.experience" :key="index" style="list-style: none">
                <span>
                  {{ $filters.dateFilter(item.startTime, 'YYYY/MM') }}
                  ----
                  {{ $filters.dateFilter(item.endTime, 'YYYY/MM') }}</span>
                <span>{{ item.title }}</span>
                <span>{{ item.desc }}</span>
              </li>
            </ul>
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.major')">
            {{ userData.major }}
          </el-descriptions-item>
          <el-descriptions-item :label="$t('msg.userInfo.glory')">
            {{ userData.glory }}
          </el-descriptions-item>
        </el-descriptions>
        <!-- content -->
        <!-- foot -->
        <div class="foot">{{ $t('msg.userInfo.foot') }}</div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { userData } from '@/mock/index.js'
import { defineProps, ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
    // required: true
  }
})

const loading = ref(false)

const printObj = {
  // 打印区域
  id: 'userInfoBox',
  // title
  popTitle: 'vue3-print',
  beforeOpenCallback() {
    loading.value = true
  },
  openCallback() {
    loading.value = false
  }
}

const handlePrintClick = () => {

}
</script>

<style lang="scss" scoped>
.print-box {
  margin-bottom: 20px;
  text-align: right;
}

.user-info-box {
  width: 1024px;
  margin: 0 auto;

  .title {
    text-align: center;
    margin-bottom: 18px;
  }

  .header {
    display: flex;

    ::v-deep .el-descriptions {
      flex-grow: 1;
    }

    .avatar {
      width: 187px;
      box-sizing: border-box;
      padding: 30px 20px;
      border: 1px solid #ebeef5;
      border-left: none;
    }

    .remark {
      margin-right: 12px;
    }
  }

  .body {
    ul {
      list-style: none;

      li {
        span {
          margin-right: 62px;
        }
      }
    }
  }

  .foot {
    margin-top: 42px;
    text-align: right;
  }
}
</style>
