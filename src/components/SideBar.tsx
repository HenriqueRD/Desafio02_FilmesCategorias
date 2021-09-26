import { Button } from "./Button";

type SideBarProps ={
    genres: Array<{
      id: number,
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
      title: string
    }>
    selectedGenreId: number;
    setSelectedGenreId: (id: number) => void;
}

export function SideBar({genres, selectedGenreId, setSelectedGenreId } : SideBarProps) {
    return(
        <nav>
            <span>Watch<p>Me</p></span>
            <section className="buttonContainer">
                {
                    genres.map(genre => 
                        <Button key={genre.id} select={genre.id === selectedGenreId} title={genre.title} icon={genre.name} onClick={() => setSelectedGenreId(genre.id)}/>
                    )
                }
            </section>
        </nav>
    );
}