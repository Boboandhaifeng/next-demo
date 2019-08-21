import Link from 'next/link'
import { Button } from 'antd'

export default () => (
  <div>
    <div>hello nextjs</div>
    <Link href="/home">
      <Button type='primary'>go home</Button>
    </Link>
    
  </div>
)