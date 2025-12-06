import EditTopicForm from '@/components/EditTopicForm'

const apiURL = process.env.API_URL

const getTopicById = async (id: string) => {
  try {
    const res = await fetch(`${apiURL}/api/topics/${id}`, {
      cache: 'no-store',
    })

    if (!res.ok) {
      throw new Error('Failed to fetch topic')
    }

    const data = await res.json()
    return data // { topic: {...} } 형태로 반환되야 함
  } catch (error) {
    console.error(error)
    return null
  }
}

interface EditTopicProps {
  params: Promise<{ id: string }>
}

export default async function EditTopic({ params }: EditTopicProps) {
  // params를 바로 구조분해하지 않고, 필요한 id 추출
  const { id } = await params

  const data = await getTopicById(id)
  if (!data || !data.topic) {
    return <div>Topic not found</div>
  }

  const { topic } = data
  const { title, description } = topic

  return <EditTopicForm id={id} title={title} description={description} />
}
