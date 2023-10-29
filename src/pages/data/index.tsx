import type { GetServerSideProps } from "next"

type DataPageProps = {
	data: Array<string>
}

const DataPage = ({ data }: DataPageProps) => {
	return (
		<div>
			<ul>
				{data.map((fact, idx) => (
					<li key={fact + "-" + idx}>{fact}</li>
				))}
			</ul>
		</div>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const req = await fetch(`${process.env.API_BASE_URL}?count=10`)
	const { data } = await req.json()
	return {
		props: { data }
	}
}

export default DataPage
