export default function Page({ params }: { params: { zoneId: number } }) {
    return <div>My restaurants in this zone id: {params.zoneId}</div>
}