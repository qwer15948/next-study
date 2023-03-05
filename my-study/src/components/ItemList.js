import { Grid } from "semantic-ui-react";
import styles from './ItemList.module.css';

export default function ItemList({ list }) {
    return (
        <div className={styles.wrap}>
            <Grid columns={3}>
                <Grid.Row>
                    {list.map((item) => (

                        <Grid.Column>
                            <img src={item.image_link} alt={item.name} className={styles.img_item}/>
                            <strong className={styles.img_item}>{item.name}</strong>
                            <span className={styles.txt_info}>{item.category} {item.product_type}</span>
                            <strong>${item.price}</strong>
                        </Grid.Column>

                    ))}

                </Grid.Row>
            </Grid>
        </div>
    )
}
