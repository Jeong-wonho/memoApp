//data read function

import { useCallback } from "react";

  //data create function
  const onCreate = useCallback(
    (content: string) => {
      const newMemo = {
        id: uuidv4(),
        content,
      };
      setDatas(datas.concat(newMemo));
    },
    [setDatas]
  );
  // data remove function
  const onRemove = useCallback(
    (id: string) => {
      setDatas(datas.filter((data) => data.id !== id));
    },
    [setDatas]
  );

  // data update function
  const onUpdate = (id: string, newData: Partial<Memo>) => {
    setDatas((prevDatas) =>
      prevDatas.map((data) => (data.id === id ? { ...data, ...newData } : data))
    );
  };