import React from 'react'
import Card from '../components/card'
import { getInitialData, showFormattedDate } from '../utils'
import './catatanStyle.css'

function HomeCatatan() {
    const [data, setData] = React.useState(getInitialData());
    const [newTitle, setNewTitle] = React.useState('');
    const [newBody, setNewBody] = React.useState('');

    const handleAdd = () => {
        const newData = {
            id: +new Date(), 
            title: newTitle,
            body: newBody,
            archived: false,
            createdAt: new Date().toISOString(),
        };
        
        setData([...data, newData]);
        setNewTitle('');
        setNewBody('');
    };

    const handleDelete = (id) => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
    };

    const handleArchive = (id) => {
        const updatedData = data.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    archived: !item.archived
                };
            }
            return item;
        });
        setData(updatedData);
    };

    const notArchive = data.filter((item) => item.archived === false)

    const archive = data.filter((item) => item.archived === true)

    return(
        <>
            <h1 className='archive'>Tambah Catatan</h1>
            <div className="add-form">
                <input
                    type="text"
                    placeholder="Title"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <textarea
                    placeholder="Body"
                    value={newBody}
                    onChange={(e) => setNewBody(e.target.value)}
                />
                <button onClick={handleAdd}>Add Note</button>
            </div>

            <h1 className='archive'>Catatan</h1>
            <section className='wrapper-card'>
                {notArchive.length > 0 ? notArchive.map((item, index) => (
                    <div key={item.id}>
                        <Card id={item.id} title={item.title} date={item.createdAt ? showFormattedDate(item.createdAt) : "Tanggal error"} content={item.body} index={index} onDelete={handleDelete} onArchive={handleArchive} archive={item.archived}/>
                    </div>
                )) : "Tidak ada Catatan"}
            </section>

            <h1 className='archive'>Archive</h1>
            <section className='wrapper-arsip'>
                {archive.length > 0 ? archive.map((item, index) => (
                    <div key={item.id}>
                        <Card id={item.id} title={item.title} date={item.createdAt ? showFormattedDate(item.createdAt) : "Tanggal error"} content={item.body} index={index} onDelete={handleDelete} onArchive={handleArchive} archive={item.archived}/>
                    </div>
                )) : "Tidak ada Catatan dalam Arsip"}
            </section>
        </>
    )
}

export default HomeCatatan