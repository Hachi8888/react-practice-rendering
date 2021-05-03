import { memo } from "react"; //propsが変更されない限り際レンダリングされない

const style = {
  witdth: "100%",
  height: "200px",
  backgroundColor: "orange"
};

export const ChilArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("childAreaがレンダリングされた！！");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
