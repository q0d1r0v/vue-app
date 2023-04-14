<script setup lang="ts">
// imports
</script>

<template>
  <div>
    <div mb-3 text-5>
      Welcome to Dashboard
    </div>

    <div class="card_container">
      <div class="block_container">
        <div class="left_block">
          <div class="item">
            <div class="item_key">
              Students
            </div>
            <div class="item_value">
              100 000
            </div>
          </div>
        </div>

        <div class="right_block">
          <div class="image">
            <Icon icon="ri-group-line" />
          </div>
        </div>
      </div>
      <div class="block_container">
        <div class="left_block">
          <div class="item">
            <div class="item_key">
              Awards
            </div>
            <div class="item_value">
              50+
            </div>
          </div>
        </div>

        <div class="right_block">
          <div class="image">
            <Icon icon="uil:award" />
          </div>
        </div>
      </div>
      <div class="block_container">
        <div class="left_block">
          <div class="item">
            <div class="item_key">
              Department
            </div>
            <div class="item_value">
              10+
            </div>
          </div>
        </div>

        <div class="right_block">
          <div class="image">
            <Icon icon="octicon:organization-24" />
          </div>
        </div>
      </div>
      <div class="block_container">
        <div class="left_block">
          <div class="item">
            <div class="item_key">
              Revenue
            </div>
            <div class="item_value">
              $100
            </div>
          </div>
        </div>

        <div class="right_block">
          <div class="image">
            <Icon
              icon="mdi-light:currency-usd"
            />
          </div>
        </div>
      </div>
    </div>
    <Chart />
  </div>
</template>

<style scoped lang="scss">
.card_container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & .block_container {
    width: 25%;
    min-height: 130px;
    background: #fff;
    margin-bottom: 15px;
    display: flex;

    & .left_block {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: left;

      & .item {
        min-width: 200px;
        min-height: 55px;
        margin-left: 10px;

        & .item_key {
          font-size: 15px;
          color: #8f8f8f;
        }

        & .item_value {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }

    & .right_block {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: right;
    }
     & .image {
      margin-right: 10px;
      font-size: 30px;
      background: #3d5ee1;
      color: #fff;
      padding: 10px;
      border-radius: 50%;
     }
  }
}
</style>
