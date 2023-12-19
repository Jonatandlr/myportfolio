
import SimpleCard from '@/components/About/SimpleCard'

interface GridSimpleCardProp {
    items: {
        icon: string,
        name: string
    }[]
}

export default function GridSimpleCard({ items }: GridSimpleCardProp) {
    return (
        <div className='flex justify-center'>
            <div className=" grid  gap-3  grid-cols-3" >
                {items.map((item, key) => (
                    <SimpleCard
                        key={key}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    )
}
