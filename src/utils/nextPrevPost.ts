/**
* add sort list post with next and prev post
*/
export default function nextPrevPost(SORT_LIST) {
  const GET_NEXT_PREV = SORT_LIST.map(({ params, props }, i) => {
    const GET_NEXT_POST = i !== SORT_LIST.length - 1 && SORT_LIST[i + 1]
    const NEXT_POST = {
      TITLE: GET_NEXT_POST?.props?.TITLE,
      SLUG: GET_NEXT_POST?.props?.SLUG,
    }
    const GET_PREV_POST = i !== 0 && SORT_LIST[i - 1]
    const PREV_POST = {
      TITLE: GET_PREV_POST?.props?.TITLE,
      SLUG: GET_PREV_POST?.props?.SLUG,
    }
    const NEW_PROPS = { ...props, NEXT_POST, PREV_POST }
    return { params, props: NEW_PROPS }
  })
  return GET_NEXT_PREV
}
