<template>
  <button 
    class="send-button"
    :class="buttonType ? 'send-button--' + buttonType : ''"
  ><span class="send-button__inner">{{title}}</span></button>
</template>

<script>
export default {
    name: 'SendButton',
    props: {
      buttonType: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      }
    },
}
</script>

<style lang="scss">
  .send-button {
    position: relative;
    width: 128px;
    padding: 0;
    color: #ffffff;
    font-size: 13px;
    font-weight: bold;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.2s ease-in;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 11px;
      width: 10px;
      height: 10px;
      transform: translateY(-50%);
      transition: transform 0.2s ease-in;
    }
    &__inner {
      display: block;
      width: 98px;
      height: 100%;
      margin-left: auto;
      padding: 15px 8px;
      border-radius: inherit;
      box-sizing: border-box;
      transition: background-color 0.2s ease-in;
    }
  }
  .send-button--reduction {
    background-color: #e95f5f;
    &:hover {
      background-color: darken($color: #e95f5f, $amount: 5%);
    }
    &::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='11' viewBox='0 0 10 11'%3E%3Cdefs%3E%3Cmask id='euifb' width='2' height='2' x='-1' y='-1'%3E%3Cpath fill='%23fff' d='M0 0h10v10H0z'/%3E%3Cpath d='M8.592 3.587L10.005 5 5 10.005-.005 5l1.413-1.413L4 6.178V0h2v6.178z'/%3E%3C/mask%3E%3Cfilter id='euifa' width='30' height='31' x='-10' y='-10' filterUnits='userSpaceOnUse'%3E%3CfeOffset dy='1' in='SourceGraphic' result='FeOffset1032Out'/%3E%3CfeGaussianBlur in='FeOffset1032Out' result='FeGaussianBlur1033Out' stdDeviation='0 0'/%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Cg opacity='.64'%3E%3Cg filter='url(%23euifa)'%3E%3Cpath fill='none' d='M8.592 3.587L10.005 5 5 10.005-.005 5l1.413-1.413L4 6.178V0h2v6.178z' mask='url(&quot;%23euifb&quot;)'/%3E%3Cpath fill-opacity='.16' d='M8.592 3.587L10.005 5 5 10.005-.005 5l1.413-1.413L4 6.178V0h2v6.178z'/%3E%3C/g%3E%3Cpath fill='%23fff' d='M8.592 3.587L10.005 5 5 10.005-.005 5l1.413-1.413L4 6.178V0h2v6.178z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  }
  .send-button--reduction .send-button__inner {
    background-color: #f26666;
    &:hover {
      background-color: darken($color: #f26666, $amount: 5%);
    }

  }
  .send-button--growth {
    background-color: #499c38;
        &:hover {
      background-color: darken($color: #499c38, $amount: 5%);
    }
    &::before {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='11' viewBox='0 0 10 11'%3E%3Cdefs%3E%3Cmask id='fb2rb' width='2' height='2' x='-1' y='-1'%3E%3Cpath fill='%23fff' d='M0 0h10v10H0z'/%3E%3Cpath d='M1.408 6.413L-.005 5 5-.005 10.005 5 8.592 6.413 6 3.822V10H4V3.822z'/%3E%3C/mask%3E%3Cfilter id='fb2ra' width='30' height='31' x='-10' y='-10' filterUnits='userSpaceOnUse'%3E%3CfeOffset dy='1' in='SourceGraphic' result='FeOffset1052Out'/%3E%3CfeGaussianBlur in='FeOffset1052Out' result='FeGaussianBlur1053Out' stdDeviation='0 0'/%3E%3C/filter%3E%3C/defs%3E%3Cg%3E%3Cg opacity='.64'%3E%3Cg filter='url(%23fb2ra)'%3E%3Cpath fill='none' d='M1.408 6.413L-.005 5 5-.005 10.005 5 8.592 6.413 6 3.822V10H4V3.822z' mask='url(&quot;%23fb2rb&quot;)'/%3E%3Cpath fill-opacity='.16' d='M1.408 6.413L-.005 5 5-.005 10.005 5 8.592 6.413 6 3.822V10H4V3.822z'/%3E%3C/g%3E%3Cpath fill='%23fff' d='M1.408 6.413L-.005 5 5-.005 10.005 5 8.592 6.413 6 3.822V10H4V3.822z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }
  }
  .send-button--growth .send-button__inner {
    background-color: #53a642;
    &:hover {
      background-color: darken($color: #53a642, $amount: 5%);
    }
  }
</style>